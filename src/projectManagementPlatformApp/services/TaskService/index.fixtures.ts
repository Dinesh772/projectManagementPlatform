import tasksFixtures from '../../fixtures/taskFixtures.json'

import checklistFixtures from '../../fixtures/checklistFixtures.json'

import toStatesFixtures from '../../fixtures/toStatesFixtures.json'
class TasksFixturesAPI {
   getTasksAPI = id => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(tasksFixtures), 1000)
      })
   }
   createTaskAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve([]), 1000)
      })
   }
   changeTaskStatusAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve([]), 1000)
      })
   }
   getChecklistAPI = (requestObject, id) => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(checklistFixtures), 1000)
      })
   }
   getWorkflowsAPI = id => {
      return new Promise((resolve, reject) => {
         resolve(toStatesFixtures)
      })
   }
}
export default TasksFixturesAPI
