import React from 'react'

import AdminDashboard from './AdminDashboard'
import { Router } from 'react-router-dom'
import { render, fireEvent, getByRole } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import i18n from '../../../../i18n/strings.json'
import ProjectsFixtureService from '../../../services/ProjectsService/index.fixtures'
import projectsData from '../../../fixtures/projectFixtures.json'
import workflowsData from '../../../fixtures/workflowFixtures.json'

import ProjectStore from '../../../stores/ProjectStore'
import AuthApi from '../../../../Authentication/services/AuthService'
import AuthStore from '../../../../Authentication/stores/AuthStore'
import TasksFixturesAPI from '../../../services/TaskService/index.fixtures'
import TaskStore from '../../../stores/TaskStore'
import { debug } from 'console'
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
      getAllByText('Ganesh karedla')
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
   it('should open create project modal and validate on focus change', () => {
      const { getByText, getAllByText, debug, getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <AdminDashboard
               projectStore={projectStore}
               authStore={authStore}
               taskStore={taskStore}
            />
         </Router>
      )
      fireEvent.click(getByText(i18n.create))
      const projectTitleElement = getByTestId('createProjectName-test')
      const descriptionElement = getByTestId('project-description')

      fireEvent.change(projectTitleElement, {
         target: { value: 'New project' }
      })
      fireEvent.change(projectTitleElement, {
         target: { value: '' }
      })
      fireEvent.change(descriptionElement, {
         target: { value: 'project description' }
      })
      fireEvent.change(descriptionElement, {
         target: { value: '' }
      })
      getAllByText('* This field is required..')
      fireEvent.click(getByTestId('close'))
      debug()
   })
   it('should able to create a project', async () => {
      const { getByText, debug, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <AdminDashboard
               projectStore={projectStore}
               authStore={authStore}
               taskStore={taskStore}
            />
         </Router>
      )
      fireEvent.click(getByText(i18n.create))
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.getWorkflowsAPI = mockProjectsAPI
      await projectStore.getWorkflowsAPI()

      const projectTitleElement = getByTestId('createProjectName-test')
      const descriptionElement = getByTestId('project-description')
      fireEvent.change(projectTitleElement, {
         target: { value: 'New project' }
      })
      fireEvent.change(descriptionElement, {
         target: { value: 'project description' }
      })
      fireEvent.change(getByTestId('workflow-dropdown'), {
         target: { value: 'Todo' }
      })
      // fireEvent.click(getByText('Todo'))
      fireEvent.change(getByTestId('project-type'), {
         target: { value: 'Classic Software' }
      })
      // fireEvent.click(getByText('Classic Software'))
      expect(getByText('Create')).not.toBeDisabled()
      fireEvent.click(getByText('Create'))
   })
})
