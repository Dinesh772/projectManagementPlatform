import projectsResponse from '../../fixtures/projectFixtures.json'
import workflowFixtures from '../../fixtures/workflowFixtures.json'
class ProjectsFixtureService {
   getProjectsAPI = (limit, offset) => {
      return new Promise((resolve, reject) => {
         // setTimeout(() => resolve(projectsResponse), 1000)
         resolve({
            projects: projectsResponse.projects.slice().splice(offset, limit),
            total_count_of_projects: projectsResponse.total_count_of_projects
         })
      })
   }
   getWorkflowsAPI = () => {
      return new Promise((resolve, reject) => {
         resolve(workflowFixtures)
      })
   }
   createProjectAPI = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve('Success'), 1000)
      })
   }
}
export default ProjectsFixtureService
