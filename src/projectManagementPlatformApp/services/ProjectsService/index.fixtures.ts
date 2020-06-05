import projectsResponse from '../../fixtures/projectFixtures.json'
import workflowFixtures from '../../fixtures/workflowFixtures.json'
class ProjectsFixtureService {
   getProjectsAPI = index => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(projectsResponse), 1000)
      })
   }
   getWorkflowsAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(workflowFixtures), 2000)
      })
   }
   createProjectAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve('Success'), 1000)
      })
   }
}
export default ProjectsFixtureService
