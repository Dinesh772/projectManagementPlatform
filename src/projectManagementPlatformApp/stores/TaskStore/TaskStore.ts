import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import TaskModel from '../models/TaskModel'

class TaskStore {
   @observable tasksList
   @observable tasksAPIStatus
   @observable createTaskAPIStatus
   @observable changeStatusAPIStatus
   @observable changeStatusAPIError
   @observable createTaskAPIError
   @observable tasksAPIError
   @observable tasksLimitPerPage
   @observable totalTasks
   @observable totalPaginationLimit
   @observable currentPageNumber
   @observable workflows
   @observable projectId
   @observable offset
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
      this.projectId = 0
      this.offset = 0
   }
   @action.bound
   clearStore() {
      this.init()
   }
   @action.bound
   getTasksAPI(id) {
      if (
         this.tasksList[this.currentPageIndex] === undefined ||
         this.tasksList[this.currentPageIndex].length === 0
      ) {
         if (this.projectId === 0) {
            this.projectId = id
         }
         const tasksPromise = this.taskService.getTasksAPI(this.projectId)
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
   changeTaskStatusAPI() {
      const changeTaskPromise = this.taskService.changeTaskStatusAPI()
      return bindPromiseWithOnSuccess(changeTaskPromise)
         .to(this.setCreateTaskAPIStatus, response => {
            this.setChangeTaskStatusAPIResponse(response)
         })
         .catch(error => {
            this.setChangeTaskStatusAPIError(error)
         })
   }

   @action.bound
   setChangeTaskStatusAPIStatus(apiStatus) {
      this.changeStatusAPIStatus = apiStatus
   }
   @action.bound
   setChangeTaskStatusAPIError(error) {
      this.changeStatusAPIError = error
   }
   @action.bound
   setChangeTaskStatusAPIResponse(response) {}

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
      this.getTasksAPI(5)
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
         this.getTasksAPI(value)
      } else if (value === '>') {
         this.currentPageNumber = this.currentPageNumber + 1
         this.getTasksAPI(value)
      } else {
         this.currentPageNumber = value
         this.getTasksAPI(value)
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
