import { create } from 'apisauce'

import { apiMethods } from '../../../Common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import endPoints from '../endPoints'

const BASE_URL =
   'https://virtserver.swaggerhub.com/Ib-Hubs8/project_management_portal/1.0.0'
const workflowEndpoint = endPoints.workflows
const createProjectEndpoint = endPoints.createProject
class ProjectsApi {
   api
   constructor() {
      this.api = create({
         baseURL: BASE_URL
      })
   }
   getProjectsAPI = (limit, offset) => {
      return networkCallWithApisauce(
         this.api,
         `/projects/v1/?limit=${limit}&offset=${offset}`,
         {},
         apiMethods.get
      )
   }
   getWorkflowsAPI = () => {
      return networkCallWithApisauce(
         this.api,
         workflowEndpoint,
         {},
         apiMethods.get
      )
   }
   createProjectAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         createProjectEndpoint,
         requestObject,
         apiMethods.post
      )
   }
}

export default ProjectsApi
