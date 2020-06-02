import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import TaskModel from '../models/TaskModel'

class TaskStore {
   @observable tasksList
   @observable tasksAPIStatus
   @observable createTaskAPIStatus
   @observable changeStatusAPIStatus
   @observable getWorkflowsAPIStatus
   @observable getWorkflowsAPIError
   @observable checklistAPIStatus
   @observable checklistAPIError
   @observable taskChecklist
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
      this.checklistAPIStatus = API_INITIAL
      this.getWorkflowsAPIStatus = API_INITIAL
      this.getWorkflowsAPIError = null
      this.checklistAPIError = null
      this.createTaskAPIError = null
      this.tasksAPIError = null
      this.tasksLimitPerPage = 10
      this.totalTasks = 0
      this.currentPageNumber = 1
      this.workflows = []
      this.taskChecklist = []
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
   changeTaskStatusAPI(reqestObject, onSuccess) {
      const changeTaskPromise = this.taskService.changeTaskStatusAPI()
      return bindPromiseWithOnSuccess(changeTaskPromise)
         .to(this.setChangeTaskAPIStatus, response => {
            this.setChangeTaskAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setChangeTaskAPIError(error)
         })
   }
   @action.bound
   getChecklistAPI(requestObject, onSuccess) {
      const checklistPromise = this.taskService.getChecklistAPI()
      return bindPromiseWithOnSuccess(checklistPromise)
         .to(this.setChecklistAPIStatus, response => {
            this.setChecklistAPIResponse(response)
            onSuccess()
         })
         .catch(error => this.setChecklistAPIError(error))
   }
   @action.bound
   getWorkflowsAPI() {
      if (this.workflows.length === 0) {
         const workflowsPromise = this.taskService.getWorkflowsAPI()
         return bindPromiseWithOnSuccess(workflowsPromise)
            .to(this.setWorkflowsAPIStatus, response => {
               this.setWorkflowsResponse(response)
            })
            .catch(error => {
               this.setWorkflowsAPIError(error)
            })
      }
   }

   @action.bound
   setWorkflowsAPIStatus(apiStatus) {
      this.getWorkflowsAPIStatus = apiStatus
   }
   @action.bound
   setWorkflowsAPIError(error) {
      this.getWorkflowsAPIError = error
   }
   @action.bound
   setWorkflowsResponse(response) {
      this.workflows = response.workflows
   }

   @action.bound
   setChecklistAPIStatus(apiStatus) {
      this.checklistAPIStatus = apiStatus
   }
   @action.bound
   setChecklistAPIError(error) {
      this.checklistAPIError = error
   }

   @action.bound
   setChecklistAPIResponse(response) {
      const checklist = response.checklist
      this.taskChecklist = checklist
   }

   @action.bound
   setChangeTaskAPIStatus(apiStatus) {
      this.changeStatusAPIStatus = apiStatus
   }
   @action.bound
   setChangeTaskAPIError(error) {
      this.changeStatusAPIError = error
   }
   @action.bound
   setChangeTaskAPIResponse(response) {}

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
   @computed
   get totalTasksCount() {
      const tasksList = this.tasksList
      let count = 0
      for (let i = 0; i < tasksList.length; ++i) {
         count += tasksList[i].length
      }
      return count
   }
}
export { TaskStore }
