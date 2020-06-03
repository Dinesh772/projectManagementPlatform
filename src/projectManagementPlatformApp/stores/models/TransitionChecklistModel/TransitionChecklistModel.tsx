import { observable } from 'mobx'

class TransitionChecklistModel {
   @observable name
   @observable id
   @observable isMandatory
   constructor(object) {
      this.name = object.name
      this.id = object.checklist_id
      this.isMandatory = object.is_mandatory
   }
}
export { TransitionChecklistModel }
