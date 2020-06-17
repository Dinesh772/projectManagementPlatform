import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

import ProjectsFixtureService from '../../../services/ProjectsService/index.fixtures'
import ProjectStore from '../../../stores/ProjectStore'
import AuthApi from '../../../../Authentication/services/AuthService'
import AuthStore from '../../../../Authentication/stores/AuthStore'

import TasksFixturesAPI from '../../../services/TaskService/index.fixtures'
import TaskStore from '../../../stores/TaskStore'
import tasksData from '../../../fixtures/taskFixtures.json'
import Tasks from '.'

describe('tasks testing', () => {
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
   it('should test tasks component should render', () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { getByLabelText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      getByLabelText('audio-loading')
   })
   it('should test tasks should render', async () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { getByText } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      getByText('about')
   })
   it('should test create task should render', async () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { debug, getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      fireEvent.click(getByTestId('addTask'))
      getByText('Create new Task')
      debug()
   })
   it('should test create task should validate title box', async () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      fireEvent.click(getByTestId('addTask'))
      getByText('Create new Task')
      fireEvent.change(getByTestId('task-title'), {
         target: { value: 'this is title' }
      })
      fireEvent.change(getByTestId('task-title'), { target: { value: '' } })

      getByText('* This field is required..')
   })
   it('should test create task should validate description change', async () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      fireEvent.click(getByTestId('addTask'))
      getByText('Create new Task')
      fireEvent.change(getByTestId('project-description'), {
         target: { value: 'project description' }
      })
      fireEvent.change(getByTestId('project-description'), {
         target: { value: '' }
      })
      getByText('* This field is required..')
      fireEvent.click(getByTestId('close'))
   })
   it('should test create task should success', async () => {
      const history = createMemoryHistory()
      history.push('/project-management-platform/dashboard/project/tasks/1')
      const { getByText, getByTestId } = render(
         <Provider
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         >
            <Router history={history}>
               <Route path='/project-management-platform/dashboard/project/tasks/:id'>
                  <Tasks />
               </Route>
            </Router>
         </Provider>
      )
      const mockTasksPromise = Promise.resolve(tasksData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockTasksPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      fireEvent.click(getByTestId('addTask'))
      getByText('Create new Task')
      fireEvent.change(getByTestId('project-description'), {
         target: { value: 'project description' }
      })
      fireEvent.change(getByTestId('task-title'), {
         target: { value: 'this is title' }
      })
      fireEvent.change(getByTestId('project-dropdown'), {
         target: { value: 'Ganesh karedla' }
      })
      fireEvent.change(getByTestId('issue-dropdown'), {
         target: { value: 'Bug' }
      })
      expect(getByTestId('submit')).not.toBeDisabled()
      fireEvent.click(getByTestId('submit'))
   })
})
