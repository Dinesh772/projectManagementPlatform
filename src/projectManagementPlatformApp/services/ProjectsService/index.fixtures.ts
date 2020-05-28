import projectsResponse from '../../fixtures/projectFixtures.json'
import workflowFixtures from '../../fixtures/workflowFixtures.json'
class ProjectsFixtureService {
   getProjectsAPI = index => {
      return new Promise((resolve, reject) => {
         resolve(projectsResponse)
      })
   }
   getWorkflowsAPI = () => {
      return new Promise((resolve, reject) => {
         resolve(workflowFixtures)
      })
   }
}
export default ProjectsFixtureService
