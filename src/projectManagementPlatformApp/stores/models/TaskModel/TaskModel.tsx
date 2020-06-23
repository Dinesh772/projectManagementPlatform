import { observable } from 'mobx'

type WorkflowType = {
   name: string
   workflowId: number
}
type ChecklistType = {
   name: string
   id: number
   isMandatory: boolean
}
class TaskModel {
   @observable taskTitle: string
   @observable projectTitle: string
   @observable description: string
   @observable id: number
   @observable workflow: Array<WorkflowType>
   @observable createdAt: string
   @observable status: string
   @observable checklist: Array<ChecklistType>
   @observable createdBy: string
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
   onDescriptionChange = (value: string) => {
      this.description = value
   }
   onTitleChange = (value: string) => {
      this.taskTitle = value
   }
}
export { TaskModel }
