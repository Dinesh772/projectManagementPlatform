import { observable } from 'mobx'

class TaskModel {
   @observable taskTitle
   @observable projectTitle
   @observable description
   @observable id
   @observable workflow
   @observable createdAt
   constructor(object) {
      this.taskTitle = object.taskTitle
      this.projectTitle = object.projectTitle
      this.description = object.description
      this.id = object.id
      this.workflow = object.workflow
      this.createdAt = object.createdAt
   }
}
export { TaskModel }
// Title
// Description
// Project - Should select from list of projects
// Issue type - Task | Bug | Developer story | User story | Enhancement
// Task state
