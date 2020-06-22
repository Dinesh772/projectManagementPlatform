import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

class PaginationStore {
   @observable apiStatus
   @observable apiError
   offset
   limit
   apiService

   constructor(config) {
      this.limit = config.limit
      this.apiService = config.service
      this.init()
   }
   @action.bound
   init() {
      this.apiStatus = API_INITIAL
      this.apiError = null
      this.offset = 0
   }

   @action.bound
   getDataAPI() {
      const APIPromise = this.apiService(this.limit, this.offset)
      return bindPromiseWithOnSuccess(APIPromise)
         .to(this.setAPIStatus, response => {
            this.setAPIResponse(response)
         })
         .catch(error => {
            this.setAPIError(getUserDisplayableErrorMessage(error))
         })
   }
   @action.bound
   setAPIStatus(apiStatus) {
      this.apiStatus = apiStatus
   }
   @action.bound
   setAPIError(error) {
      this.apiError = error
   }
   @action.bound
   setAPIResponse(response) {
      console.log(response)
   }
}

export { PaginationStore }
