import { observable } from 'mobx'

class ProjectModel {
   @observable name
   @observable workflowType
   @observable whoCreated
   @observable createdAt
   @observable id
   @observable description
   @observable projectType
   constructor(object) {
      this.id = object.project_id
      this.name = object.name
      this.description = object.description
      this.workflowType = object.workflow_type
      this.projectType = object.project_type
      this.whoCreated = object.created_by
      this.createdAt = object.created_at
   }
}
export { ProjectModel }
