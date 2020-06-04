import { observable, action, computed } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

import ProjectModel from '../models/ProjectModel'
import WorkflowModel from '../models/WorkflowModel'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

class ProjectStore {
   @observable projectsList
   @observable projectsAPIStatus
   @observable workflowsAPIStatus
   @observable createProjectAPIStatus
   @observable projectsAPIError
   @observable workflowsAPIError
   @observable createProjectAPIError
   @observable isAdmin
   @observable projectsLimitPerPage
   @observable totalProjects
   @observable totalPaginationLimit
   @observable currentPageNumber
   @observable workflows
   @observable offset

   projectsService
   constructor(projectsService) {
      this.projectsService = projectsService
      this.init()
   }
   @action.bound
   init() {
      this.projectsList = []
      this.projectsAPIStatus = API_INITIAL
      this.workflowsAPIStatus = API_INITIAL
      this.createProjectAPIStatus = API_INITIAL
      this.projectsAPIError = null
      this.workflowsAPIError = null
      this.createProjectAPIError = null
      this.isAdmin = true
      this.projectsLimitPerPage = 10
      this.totalProjects = 0
      this.totalPaginationLimit = 0
      this.currentPageNumber = 1
      this.workflows = []
      this.offset = 0
   }
   @action.bound
   clearStore() {
      this.init()
   }
   @action.bound
   getProjectsAPI() {
      if (
         this.projectsList[this.currentPageIndex] === undefined ||
         this.projectsList[this.currentPageIndex].length === 0
      ) {
         const projectsPromise = this.projectsService.getProjectsAPI(
            this.projectsLimitPerPage,
            this.offset
         )
         return bindPromiseWithOnSuccess(projectsPromise)
            .to(this.setProjectsAPIStatus, response => {
               this.setProjectsAPIResponse(response)
            })
            .catch(error => {
               this.setProjectsAPIError(error)
            })
      } else {
         return this.renderProjectsList
      }
   }
   @action.bound
   getWorkflowsAPI() {
      const workFlowsPromise = this.projectsService.getWorkflowsAPI()
      return bindPromiseWithOnSuccess(workFlowsPromise)
         .to(this.setWorkflowAPIStatus, response => {
            this.setWorkflowAPIResponse(response)
         })
         .catch(error => {
            this.setWorkflowAPIError(error)
         })
   }

   @action.bound
   createProjectAPI(requestObject, onSuccess) {
      console.log('-->', requestObject)
      const createProjectPromise = this.projectsService.createProjectAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(createProjectPromise)
         .to(this.setCreateProjectAPIStatus, response => {
            this.setCreateProjectAPIResponse(response)
            onSuccess()
         })
         .catch(error => this.setCreateProjectAPIError(error))
   }
   @action.bound
   setCreateProjectAPIStatus(apiStatus) {
      console.log('--->', apiStatus)
      this.createProjectAPIStatus = apiStatus
   }

   @action.bound
   setCreateProjectAPIError(error) {
      console.log(error)
      //console.log('-->', getUserDisplayableErrorMessage(error))
      this.createProjectAPIError = error
   }
   @action.bound
   setCreateProjectAPIResponse(response) {
      console.log(response)
      // this.onAddWorkflows(response)
   }
   @action.bound
   setWorkflowAPIStatus(apiStatus) {
      this.workflowsAPIStatus = apiStatus
   }

   @action.bound
   setWorkflowAPIError(error) {
      this.workflowsAPIError = error
   }
   @action.bound
   setWorkflowAPIResponse(response) {
      this.onAddWorkflows(response.workflows)
   }

   @action.bound
   setProjectsAPIStatus(apiStatus) {
      this.projectsAPIStatus = apiStatus
   }

   @action.bound
   setProjectsAPIError(error) {
      this.projectsAPIError = error
   }
   @action.bound
   setProjectsAPIResponse(response) {
      this.totalProjects = response.total_count_of_projects
      if (this.projectsList.length === 0) {
         this.onInitializeArrayElements(this.totalProjects)
      }
      const totalPages =
         response.total_count_of_projects / this.projectsLimitPerPage
      this.totalPaginationLimit = totalPages
      this.onAddProject(response.projects)
   }
   @action.bound
   onInitializeArrayElements(length) {
      const array = this.projectsList
      for (let i = 0; i < length; ++i) {
         array.push([])
      }
      this.projectsList = array
   }
   @action.bound
   onAddWorkflows(response) {
      const workflows = response.map(workflow => new WorkflowModel(workflow))
      this.workflows = workflows
   }
   @action.bound
   onAddProject(projects) {
      const projectsList = projects.map(
         eachProject => new ProjectModel(eachProject)
      )
      this.projectsList[this.currentPageIndex] = projectsList
   }
   @action.bound
   handlePaginationButtons(value) {
      this.currentPageNumber = value
      this.getProjectsAPI()
   }
   @computed
   get renderProjectsList() {
      const { projectsList, currentPageIndex } = this
      return projectsList[currentPageIndex]
   }
   @computed
   get currentPageIndex() {
      return this.currentPageNumber - 1
   }
   @computed
   get totalProjectsCount() {
      const projectsList = this.projectsList
      let count = 0
      for (let i = 0; i < projectsList.length; ++i) {
         count += projectsList[i].length
      }
      return count
   }
   @computed
   get totalProjectsTitleNames() {
      const projectsList = this.projectsList
      let projectNames: any = []
      for (let i = 0; i < this.totalProjects; ++i) {
         for (let j = 0; j < projectsList[i].length; ++j) {
            let name = projectsList[i][j].name
            projectNames.push(name)
         }
      }
      return projectNames
   }
}
export { ProjectStore }
