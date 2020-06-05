import { observable } from 'mobx'

class StatesModel {
   @observable name
   @observable stateId
   constructor(object) {
      this.name = object.name
      this.stateId = object.to_state_id
   }
}
export { StatesModel }
