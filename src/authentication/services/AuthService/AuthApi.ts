import { create } from 'apisauce'

import { apiMethods } from '../../../common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../common/utils/APIUtils'
//import endPoints from '../endPoints'

const AUTH_URL = 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
//const endPoint = endPoints.login

class AuthApi {
   api
   constructor() {
      this.api = create({
         baseURL: AUTH_URL
      })
   }
   signInAPI = requestObject => {
      return networkCallWithApisauce(this.api, 'v1/signin/', {}, apiMethods.get)
   }
}

export { AuthApi }
