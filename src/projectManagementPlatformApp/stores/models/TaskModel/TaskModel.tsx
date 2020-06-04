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
      this.taskTitle = object.title
      this.projectTitle = object.project
      this.description = object.description
      this.id = object.task_id
      this.status = object.state
      this.workflow = object.workflows
      this.checklist = object.checklist
      this.createdBy = object.created_by
      this.createdAt = object.created_at
   }
   onDescriptionChange = value => {
      this.description = value
   }
   onTitleChange = value => {
      this.taskTitle = value
   }
}
export { TaskModel }
