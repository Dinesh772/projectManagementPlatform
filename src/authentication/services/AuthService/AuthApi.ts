import { create } from 'apisauce'

import { apiMethods } from '../../../constants/APIConstants'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import endPoints from '../endPoints'

const AUTH_URL = ''
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
