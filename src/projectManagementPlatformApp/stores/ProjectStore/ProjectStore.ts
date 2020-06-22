import { observable, action, computed } from 'mobx'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

import ProjectModel from '../models/ProjectModel'
import WorkflowModel from '../models/WorkflowModel'
import ProjectsFixtureService from '../../services/ProjectsService/index.fixtures'
import ProjectsApi from '../../services/ProjectsService/index.Api'

export type ProjectModelType = {
   name: string
   workflowType: string
   whoCreated: string
   createdAt: string
   id: number
   description: String
   projectType: String
}
export type WorkflowType = {
   name: string
   workflowId: number
}
class ProjectStore {
   @observable projectsList!: Array<Array<ProjectModelType>>
   @observable projectsAPIStatus!: number
   @observable workflowsAPIStatus!: number
   @observable createProjectAPIStatus!: number
   @observable projectsAPIError
   @observable workflowsAPIError
   @observable createProjectAPIError
   @observable projectsLimitPerPage!: number
   @observable totalProjects!: number
   @observable totalProjectsList
   @observable totalProjectsAPIStatus!: number
   @observable totalProjectsAPIError
   @observable totalPaginationLimit!: number
   @observable currentPageNumber!: number
   @observable workflows!: Array<Array<WorkflowType>>
   @observable offset!: number

   projectsService
   constructor(projectsService: ProjectsFixtureService | ProjectsApi) {
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
   getTotalProjectsAPI() {
      const projectsPromise = this.projectsService.getProjectsAPI(
         this.totalProjects,
         this.offset
      )
      return bindPromiseWithOnSuccess(projectsPromise)
         .to(this.setTotalProjectsAPIStatus, response => {
            this.setTotalProjectsAPIResponse(response)
         })
         .catch(error => {
            this.setTotalProjectsAPIError(error)
         })
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
   createProjectAPI(requestObject, onSuccess: Function) {
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
   setCreateProjectAPIStatus(apiStatus: number) {
      this.createProjectAPIStatus = apiStatus
   }
   @action.bound
   setTotalProjectsAPIStatus = apiStatus => {
      this.totalProjectsAPIStatus = apiStatus
   }
   @action.bound
   setTotalProjectsAPIError = error => {
      this.totalProjectsAPIError = error
   }
   @action.bound
   setTotalProjectsAPIResponse = response => {
      this.onAddTotalProjects(response.projects)
   }
   @action.bound
   setCreateProjectAPIError(error) {
      this.createProjectAPIError = error
   }
   @action.bound
   setCreateProjectAPIResponse(response) {}

   @action.bound
   onAddTotalProjects(projects) {
      const totalProjectsList = projects.map(
         eachProject => new ProjectModel(eachProject)
      )
      this.totalProjectsList = totalProjectsList
   }

   @action.bound
   setWorkflowAPIStatus(apiStatus: number) {
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
   setProjectsAPIStatus(apiStatus: number) {
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
      const totalPages = Math.ceil(
         response.total_count_of_projects / this.projectsLimitPerPage
      )

      this.totalPaginationLimit = totalPages
      this.onAddProject(response.projects)
      this.getTotalProjectsAPI()
   }
   @action.bound
   onInitializeArrayElements(length) {
      const array = this.projectsList
      const emptyArray: Array<ProjectModelType> = []
      for (let i = 0; i < length; ++i) {
         array.push(emptyArray)
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
      this.offset =
         value * this.projectsLimitPerPage - this.projectsLimitPerPage

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
      const projectsList = this.totalProjectsList
      if (projectsList !== undefined) {
         let projectNames: any = []
         for (let i = 0; i < this.totalProjectsList; ++i) {
            let name = projectsList[i].name
            projectNames.push(name)
         }
         return projectNames
      } else return []
   }
}
export { ProjectStore }
