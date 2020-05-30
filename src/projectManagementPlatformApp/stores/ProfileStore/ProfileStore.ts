import { observable, action } from 'mobx'

class ProfileStore {
   @observable username
   @observable isAdmin
   @observable name
   constructor() {
      this.init()
   }
   @action.bound
   init() {
      this.name = ''
      this.username = ''
      this.isAdmin = false
   }
   @action.bound
   clearStore() {}
}
export { ProfileStore }
