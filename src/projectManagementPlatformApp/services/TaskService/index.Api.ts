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
      console.log('==><>', requestObject)
      return networkCallWithApisauce(
         this.api,
         '/task/v1/',
         requestObject,
         apiMethods.post
      )
   }
}

export default TasksAPI
