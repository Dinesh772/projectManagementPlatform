import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

class ProjectStore {
   @observable projectsList
   @observable projectsAPIStatus
   @observable projectsAPIError
   @observable isAdmin

   projectsService
   constructor(projectsService) {
      this.projectsService = projectsService
      this.init()
   }
   @action.bound
   init() {
      this.projectsList = []
      this.projectsAPIStatus = API_INITIAL
      this.projectsAPIError = null
      this.isAdmin = true
   }
   @action.bound
   clearStore() {
      this.init()
   }
   @action.bound
   getProjectsAPI() {
      const projectsPromise = this.projectsService.getProjectsAPI()
      return bindPromiseWithOnSuccess(projectsPromise)
         .to(this.setProjectsAPIStatus, response => {
            this.setProjectsAPIResponse(response)
         })
         .catch(error => {
            this.setProjectsAPIError(error)
         })
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
      console.log(response)
   }

   @action.bound
   createProjectAPI() {}
}
export { ProjectStore }
