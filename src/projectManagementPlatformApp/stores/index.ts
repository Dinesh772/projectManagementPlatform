import { AuthStore } from '../../authentication/stores/AuthStore/AuthStore'
import AuthApi from '../../authentication/services/AuthService/index'
import ProjectStore from './ProjectStore'
import ProjectsService from '../services/ProjectsService/index.fixtures'
import TaskStore from './TaskStore'
import TasksAPI from '../services/TaskService/index.Api'
import TasksFixturesAPI from '../services/TaskService/index.fixtures'

const authApi = new AuthApi()
const authStore = new AuthStore(authApi)
const projectsService = new ProjectsService()
const projectStore = new ProjectStore(projectsService)

const taskService = new TasksFixturesAPI()
const taskStore = new TaskStore(taskService)
export default { authStore, projectStore, taskStore }
