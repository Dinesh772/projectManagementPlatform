import React from 'react'

import AdminDashboard from './AdminDashboard'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import {
   render,
   fireEvent,
   waitFor,
   getAllByText
} from '@testing-library/react'
import { createMemoryHistory } from 'history'
import i18n from '../../../../i18n/strings.json'
import ProjectsFixtureService from '../../../services/ProjectsService/index.fixtures'
import projectsData from '../../../fixtures/projectFixtures.json'

import ProjectStore from '../../../stores/ProjectStore'
import AuthApi from '../../../../authentication/services/AuthService'
import AuthStore from '../../../../authentication/stores/AuthStore'
import TasksFixturesAPI from '../../../services/TaskService/index.fixtures'
import TaskStore from '../../../stores/TaskStore'
describe('Admin component tests', () => {
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
   it('admin component should render', () => {
      const { getAllByText } = render(
         <Router history={createMemoryHistory()}>
            <AdminDashboard
               projectStore={projectStore}
               authStore={authStore}
               taskStore={taskStore}
            />
         </Router>
      )
      getAllByText(i18n.listOfProjects)
      getAllByText(i18n.create)
   })
   it('should display list of projects', async () => {
      const { getAllByText } = render(
         <Router history={createMemoryHistory()}>
            <AdminDashboard
               projectStore={projectStore}
               authStore={authStore}
               taskStore={taskStore}
            />
         </Router>
      )
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI
      await projectStore.getProjectsAPI()
      getAllByText(i18n.projectName)
      getAllByText(i18n.type)
      getAllByText(i18n.createdAt)
      getAllByText(i18n.createdBy)
      getAllByText('Chastity Hutchinson')
   })
   it('should open create project modal onClick create project', () => {
      const { getByText, getAllByText } = render(
         <Router history={createMemoryHistory()}>
            <AdminDashboard
               projectStore={projectStore}
               authStore={authStore}
               taskStore={taskStore}
            />
         </Router>
      )
      fireEvent.click(getByText(i18n.create))
      getAllByText(i18n.createHeading)
      getAllByText(i18n.createFinal)
   })
})
