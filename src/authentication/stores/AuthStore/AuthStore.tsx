import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class AuthStore {
   @observable getSignInApiStatus
   @observable getSignInError
   @observable access_token
   authService
   constructor(authService) {
      this.init()
      this.authService = authService
   }
   @action.bound
   init() {
      this.getSignInApiStatus = API_INITIAL
      this.getSignInError = null
      this.access_token = undefined
   }
   @action.bound
   clearStore() {
      this.init()
   }
   getSignInAPI = (requestObject, onSuccess, onFailure) => {
      const tokenPromise = this.authService.signInAPI(requestObject)
      return bindPromiseWithOnSuccess(tokenPromise)
         .to(this.setSignInAPIStatus, response => {
            this.setSignInAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setSignInAPIError(error)
         })
   }
   @action.bound
   setSignInAPIError(error) {
      this.getSignInError = error
   }
   @action.bound
   setSignInAPIStatus(apiStatus) {
      this.getSignInApiStatus = apiStatus
   }
   @action.bound
   setSignInAPIResponse(response) {}
}

export { AuthStore }
