import tasksFixtures from '../../fixtures/taskFixtures.json'
class TasksFixturesAPI {
   getTasksAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(tasksFixtures), 1000)
      })
   }
}
export default TasksFixturesAPI
