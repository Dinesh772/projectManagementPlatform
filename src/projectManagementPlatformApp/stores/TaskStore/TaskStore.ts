import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import TaskModel from '../models/TaskModel'

class TaskStore {
   @observable tasksList
   @observable tasksAPIStatus
   @observable createTaskAPIStatus
   @observable createTaskAPIError
   @observable tasksAPIError
   @observable tasksLimitPerPage = 10
   @observable totalTasks = 0
   @observable totalPaginationLimit
   @observable currentPageNumber
   @observable workflows
   taskService
   constructor(taskService) {
      this.init()
      this.taskService = taskService
   }
   init() {
      this.tasksList = []
      this.tasksAPIStatus = API_INITIAL
      this.createTaskAPIStatus = API_INITIAL
      this.createTaskAPIError = null
      this.tasksAPIError = null
      this.tasksLimitPerPage = 10
      this.totalTasks = 0
      this.currentPageNumber = 1
      this.workflows = []
      this.totalPaginationLimit = 0
   }
   @action.bound
   clearStore() {
      this.init()
   }
   @action.bound
   getTasksAPI() {
      if (
         this.tasksList[this.currentPageIndex] === undefined ||
         this.tasksList[this.currentPageIndex].length === 0
      ) {
         const tasksPromise = this.taskService.getTasksAPI()
         return bindPromiseWithOnSuccess(tasksPromise)
            .to(this.setTasksAPIStatus, response => {
               this.setTasksAPIResponse(response)
            })
            .catch(error => {
               this.setTasksAPIError(error)
            })
      }
   }
   @action.bound
   createTaskAPI(taskDetailsObject, onSuccess, onFailure) {
      const createTaslPromise = this.taskService.createTaskAPI()
      return bindPromiseWithOnSuccess(createTaslPromise)
         .to(this.setCreateTaskAPIStatus, response => {
            this.setCreateTaskAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setCreateTaskAPIError(error)
            onFailure()
         })
   }
   @action.bound
   setCreateTaskAPIStatus(apiStatus) {
      this.createTaskAPIStatus = apiStatus
   }
   @action.bound
   setCreateTaskAPIError(error) {
      this.createTaskAPIError = error
   }
   @action.bound
   setCreateTaskAPIResponse(response) {
      this.getTasksAPI()
   }

   @action.bound
   onInitializeArrayElements(length) {
      const array = this.tasksList
      for (let i = 0; i < length; ++i) {
         array.push([])
      }
      this.tasksList = array
   }
   @action.bound
   setTasksAPIStatus(apiStatus) {
      this.tasksAPIStatus = apiStatus
   }
   @action.bound
   setTasksAPIError(error) {
      this.tasksAPIError = error
   }
   @action.bound
   setTasksAPIResponse(response) {
      this.totalTasks = response.totalTasks
      if (this.tasksList.length === 0) {
         this.onInitializeArrayElements(this.totalTasks)
      }
      const totalPages = response.totalTasks / this.tasksLimitPerPage
      this.totalPaginationLimit = totalPages
      this.onAddTasks(response.tasks[this.currentPageIndex])
   }
   @action.bound
   onAddTasks(tasks) {
      const tasksList = tasks.map(eachTask => new TaskModel(eachTask))
      this.tasksList[this.currentPageIndex] = tasksList
   }
   @action.bound
   handlePaginationButtons(value) {
      if (value === '<') {
         this.currentPageNumber = this.currentPageNumber - 1
         this.getTasksAPI()
      } else if (value === '>') {
         this.currentPageNumber = this.currentPageNumber + 1
         this.getTasksAPI()
      } else {
         this.currentPageNumber = value
         this.getTasksAPI()
      }
   }
   @computed
   get currentPageIndex() {
      return this.currentPageNumber - 1
   }
   @computed
   get renderedTasksList() {
      const { tasksList, currentPageIndex } = this
      if (tasksList.length > 0) {
         return tasksList[currentPageIndex]
      } else {
         return tasksList
      }
   }
}
export { TaskStore }
