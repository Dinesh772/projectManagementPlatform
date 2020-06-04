import { create } from 'apisauce'

import { apiMethods } from '../../../Common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import endPoints from '../endPoints'

const AUTH_URL = 'http://54.179.116.35:8080/api/project_management_portal'
const endPoint = endPoints.login

class AuthApi {
   api
   constructor() {
      this.api = create({
         baseURL: AUTH_URL
      })
   }
   signInAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         endPoint,
         requestObject,
         apiMethods.get
      )
   }
}

export { AuthApi }
