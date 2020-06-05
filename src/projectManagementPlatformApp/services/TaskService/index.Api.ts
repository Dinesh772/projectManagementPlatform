import { create } from 'apisauce'

import { apiMethods } from '../../../Common/constants/APIConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import endPoints from '../endPoints'
import { BASE_URL } from '../../../Common/constants/RouteConstants'

class TasksAPI {
   api
   constructor() {
      this.api = create({
         baseURL: BASE_URL
      })
   }
   getTasksAPI = (id, limit, offset) => {
      return networkCallWithApisauce(
         this.api,
         `/project/tasks/${id}/v1/?limit=${limit}&offset=${offset}`,
         {},
         apiMethods.get
      )
   }
   createTaskAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         '/task/v1/',
         requestObject,
         apiMethods.post
      )
   }
   getWorkflowsAPI = id => {
      return networkCallWithApisauce(
         this.api,
         `/states/${id}/v1/`,
         {},
         apiMethods.get
      )
   }
   getChecklistAPI = (requestObject, id) => {
      console.log('stateAPI--->', id, requestObject)
      return networkCallWithApisauce(
         this.api,
         `/transition/${id}/v1/`,
         requestObject,
         apiMethods.get
      )
   }
}

export default TasksAPI
