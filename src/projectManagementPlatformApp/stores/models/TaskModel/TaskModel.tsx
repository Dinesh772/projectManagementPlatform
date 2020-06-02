import { observable } from 'mobx'

class TaskModel {
   @observable taskTitle
   @observable projectTitle
   @observable description
   @observable id
   @observable workflow
   @observable createdAt
   @observable status
   @observable checklist
   @observable createdBy
   constructor(object) {
      this.taskTitle = object.taskTitle
      this.projectTitle = object.projectTitle
      this.description = object.description
      this.id = object.id
      this.status = object.state
      this.workflow = object.workflows
      this.checklist = object.checklist
      this.createdBy = object.createdBy
      this.createdAt = object.createdAt
   }
   onDescriptionChange = value => {
      this.description = value
   }
   onTitleChange = value => {
      this.taskTitle = value
   }
}
export { TaskModel }
// Title
// Description
// Project - Should select from list of projects
// Issue type - Task | Bug | Developer story | User story | Enhancement
// Task state
