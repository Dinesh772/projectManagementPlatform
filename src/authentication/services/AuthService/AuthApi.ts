import { create } from 'apisauce'

import { apiMethods } from '../../../Common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../Common/utils/AuthAPIUtils'
import endPoints from '../endPoints'
import { BASE_URL } from '../../../Common/constants/RouteConstants'

const AUTH_URL = BASE_URL
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
         apiMethods.post
      )
   }
}

export { AuthApi }
