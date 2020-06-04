import { create } from 'apisauce'

import { apiMethods } from '../../../Common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
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

// import { create } from 'apisauce'

// import { apiMethods } from '../../../Common/constants/APIConstants'
// import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
// import endPoints from '../endPoints'

// const AUTH_URL = 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
// const endPoint = endPoints.login

// class AuthApi {
//    api
//    constructor() {
//       this.api = create({
//          baseURL: AUTH_URL
//       })
//    }
//    signInAPI = requestObject => {
//       return networkCallWithApisauce(
//          this.api,
//          'v1/signin/',
//          requestObject,
//          apiMethods.get
//       )
//    }
// }

// export { AuthApi }
