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
      this.name = object.name
      this.workflowType = object.workflowType
      this.whoCreated = object.whoCreated
      this.createdAt = object.createdAt
      this.id = object.id
      this.description = object.description
      this.projectType = object.projectType
   }
}
export { ProjectModel }
