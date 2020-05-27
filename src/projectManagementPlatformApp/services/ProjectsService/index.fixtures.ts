import projectsResponse from '../../fixtures/projectFixtures.json'

class ProjectsFixtureService {
   getProjectsAPI = () => {
      return new Promise((resolve, reject) => {
         resolve(projectsResponse)
         //reject(new Error('error'))
      })
   }
}
export default ProjectsFixtureService
