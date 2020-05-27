import { create } from 'apisauce'

import { apiMethods } from '../../../common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../common/utils/APIUtils'
import endPoints from '../endPoints'

const BASE_URL = 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
const endPoint = endPoints.projects

class ProjectsApi {
   api
   constructor() {
      this.api = create({
         baseURL: BASE_URL
      })
   }
   projectsAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         endPoint,
         requestObject,
         apiMethods.get
      )
   }
}

export default ProjectsApi
