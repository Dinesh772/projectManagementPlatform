import { AuthStore } from '../../authentication/stores/AuthStore/AuthStore'
import AuthApi from '../../authentication/services/AuthService/index'
import ProjectStore from './ProjectStore'
import ProjectsService from '../services/ProjectsService/index.fixtures'

const authApi = new AuthApi()
const authStore = new AuthStore(authApi)
const projectsService = new ProjectsService()
const projectStore = new ProjectStore(projectsService)

export default { authStore, projectStore }
