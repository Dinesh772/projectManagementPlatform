import authStore from '../../Authentication/stores/index'
import ProjectStore from './ProjectStore'
import ProjectsService from '../services/ProjectsService/index.fixtures'
import TaskStore from './TaskStore'
//import TasksAPI from '../services/TaskService/index.Api'
import TasksFixturesAPI from '../services/TaskService/index.fixtures'
//import ProjectsApi from '../services/ProjectsService/index.Api'
const projectsService = new ProjectsService()
//const projectsService = new ProjectsApi()
const projectStore = new ProjectStore(projectsService)

const taskService = new TasksFixturesAPI()
//const taskService = new TasksAPI()
const taskStore = new TaskStore(taskService)
export default { authStore, projectStore, taskStore }
