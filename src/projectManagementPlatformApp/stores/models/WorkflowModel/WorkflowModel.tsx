import { observable } from 'mobx'

class WorkflowModel {
   @observable name
   @observable workflowId
   constructor(object) {
      this.name = object.name
      this.workflowId = object.workflow_id
   }
}
export { WorkflowModel }
