import React from 'react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import i18n from '../../../../i18n/strings.json'
import ProjectManagementPlatformDashboard from '.'
import ProjectsFixtureService from '../../../services/ProjectsService/index.fixtures'
import ProjectStore from '../../../stores/ProjectStore'
import AuthApi from '../../../../authentication/services/AuthService'
import AuthStore from '../../../../authentication/stores/AuthStore'
import projectsData from '../../../fixtures/projectFixtures.json'
import {
   PROJECT_MANAGEMENT_PLATFORM_DASHBOARD,
   PROJECT_MANAGEMENT_PLATFORM_TASKS
} from '../../../../common/constants/RouteConstants'
import workflowdata from '../../../fixtures/workflowFixtures.json'
import TasksFixturesAPI from '../../../services/TaskService/index.fixtures'
import TaskStore from '../../../stores/TaskStore'
import tasksData from '../../../fixtures/taskFixtures.json'
import Tasks from '../Tasks'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'> {location.pathname}</div>
))
describe('ProjectManagementPlatformDashboard', () => {
   let projectStore
   let projectService
   let authStore
   let authService
   let taskService
   let taskStore
   beforeEach(() => {
      projectService = new ProjectsFixtureService()
      projectStore = new ProjectStore(projectService)
      authService = new AuthApi()
      authStore = new AuthStore(authService)
      taskService = new TasksFixturesAPI()
      taskStore = new TaskStore(taskService)
   })
   it('should check header is rendered', () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            authStore={authStore}
            taskStore={taskStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      getByText(i18n.projectTitle)
   })
   it('should logout onClick logout', () => {
      const history = createMemoryHistory()
      const route = PROJECT_MANAGEMENT_PLATFORM_DASHBOARD
      history.push(route)
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path={PROJECT_MANAGEMENT_PLATFORM_DASHBOARD}>
                  <ProjectManagementPlatformDashboard />
               </Route>
               <Route path={'/'}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      fireEvent.click(getByText(i18n.logout))
      expect(getByTestId('location-display')).toBeInTheDocument()
   })
   it('should display profile details', () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      getByText(i18n.name)
      getByText(i18n.userId)
      getByText(i18n.accountType)
   })
   it('should test data fetching state', () => {
      const { getByLabelText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      getByLabelText('audio-loading')
   })
   it('should test list of projects should render', async () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      expect(projectStore.productsList).not.toEqual([])
      getByText(i18n.listOfProjects)
   })
   it('should test pagination to the user', async () => {
      const { getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      getByTestId(i18n.paginationTestId)
   })
   it('should open create project modal onClick create button', async () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText(i18n.create))
      getByText(i18n.createHeading)
      getByText(i18n.description)
   })
   it('should display error messages on createProject modal without entering fields', async () => {
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText(i18n.create))
      fireEvent.click(getByText(i18n.createFinal))
      expect(getByTestId(i18n.createProjectNameTestId)).toBeInTheDocument()
   })
   it('should get loadind on create project submit button clicked', async () => {
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)

      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText(i18n.create))
      fireEvent.change(getByTestId(i18n.createProjectNameTestId), {
         target: { value: i18n.projectName }
      })
      fireEvent.change(getByTestId(i18n.projectDescriptionTestId), {
         target: { value: i18n.description }
      })

      fireEvent.click(getByText(i18n.selectWorkflow))

      const mockWorkflowPromise = Promise.resolve(workflowdata)
      const mockWorkflowAPI = jest.fn()
      mockWorkflowAPI.mockReturnValue(mockWorkflowPromise)
      projectService.getWorkflowsAPI = mockWorkflowAPI
      await projectStore.getWorkflowsAPI()

      fireEvent.click(getByText(i18n.selectWorkflow))
      fireEvent.click(getByText('Todo'))
      fireEvent.click(getByText(i18n.createHeading))
   })
   it('should able to click pagination buttons and get data', async () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText('>'))
      await projectStore.getProjectsAPI()

      getByText(i18n.listOfProjects)
      fireEvent.click(getByText('>'))
      await projectStore.getProjectsAPI()

      getByText(i18n.listOfProjects)
      fireEvent.click(getByText('>'))
      await projectStore.getProjectsAPI()

      getByText(i18n.listOfProjects)
   })
   it('should render list of tasks screen onProject card click', async () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText('Chastity Hutchinson'))
      //getByText(i18n.addTask)
   })
   it('should able to open createTask card on click addTask', async () => {
      const history = createMemoryHistory()
      history.replace(PROJECT_MANAGEMENT_PLATFORM_DASHBOARD)
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path={PROJECT_MANAGEMENT_PLATFORM_DASHBOARD}>
                  <ProjectManagementPlatformDashboard />
               </Route>

               <Route path={PROJECT_MANAGEMENT_PLATFORM_TASKS}>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText('Chastity Hutchinson'))
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()

      fireEvent.click(getByText(i18n.addTask))
      getByText(i18n.createTask)
   })
   it('should display  tasks on the list of tasks compoment', async () => {
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Router>
         </Provider>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      fireEvent.click(getByText('Chastity Hutchinson'))

      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      waitFor(() => {
         getByText('ut erat.')
      })
   })
})
