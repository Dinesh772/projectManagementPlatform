import tasksFixtures from '../../fixtures/taskFixtures.json'
class TasksFixturesAPI {
   getTasksAPI = id => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(tasksFixtures), 1000)
         //setTimeout(() => reject(new Error('error')), 1000)
      })
   }
   createTaskAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve([]), 1000)
      })
   }
   changeTaskStatusAPI = () => {
      return new Promise((resolve, reject) => {
         resolve([])
      })
   }
   getChecklistAPI = () => {}
}
export default TasksFixturesAPI
