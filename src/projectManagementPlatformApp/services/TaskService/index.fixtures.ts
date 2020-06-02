import tasksFixtures from '../../fixtures/taskFixtures.json'

import checklistFixtures from '../../fixtures/checklistFixtures.json'

import workflowsFixtures from '../../fixtures/workflowFixtures.json'
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
         setTimeout(() => resolve([]), 2000)
      })
   }
   getChecklistAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(checklistFixtures), 1000)
         //setTimeout(() => reject(new Error('error')), 1000)
      })
   }
   getWorkflowsAPI = () => {
      return new Promise((resolve, reject) => {
         resolve(workflowsFixtures)
      })
   }
}
export default TasksFixturesAPI
