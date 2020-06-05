import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   getAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
class AuthStore {
   @observable getSignInApiStatus
   @observable getSignInError
   @observable isAdmin
   authService
   constructor(authService) {
      this.init()
      this.authService = authService
      this.isAdmin = null
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
            onFailure(getUserDisplayableErrorMessage(error))
         })
   }
   @action.bound
   setSignInAPIError(error) {
      this.getSignInError = getUserDisplayableErrorMessage(error)
   }
   @action.bound
   setSignInAPIStatus(apiStatus) {
      console.log(apiStatus)
      this.getSignInApiStatus = apiStatus
   }
   @action.bound
   setSignInAPIResponse(response) {
      const accessToken = response.access_token
      this.isAdmin = response.is_admin
      console.log('isAdmin==', this.isAdmin, response)
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
