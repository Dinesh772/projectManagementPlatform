import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   getAccessToken,
   clearUserSession
} from '../../../common/utils/StorageUtils'
class AuthStore {
   @observable getSignInApiStatus
   @observable getSignInError
   authService
   constructor(authService) {
      this.init()
      this.authService = authService
   }
   @action.bound
   init() {
      this.getSignInApiStatus = API_INITIAL
      this.getSignInError = null
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
            onFailure(error)
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
   setSignInAPIResponse(response) {
      const accessToken = response[0].access_token
      setAccessToken(accessToken)
   }
   @action.bound
   clearUserSession() {
      clearUserSession()
      this.clearStore()
   }
   @computed
   get accessToken() {
      if (getAccessToken() !== undefined) {
         return true
      }
      return false
   }
}

export { AuthStore }
