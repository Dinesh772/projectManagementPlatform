import React from 'react'
import { Router, Route, withRouter } from 'react-router-dom'
import {
   render,
   fireEvent,
   waitForDomChange,
   getByTestId,
   getByAltText
} from '@testing-library/react'
import { createMemoryHistory } from 'history'
import i18n from '../../../../i18n/strings.json'
import ProjectManagementPlatformDashboard from '.'
import ProjectsFixtureService from '../../../services/ProjectsService/index.fixtures'
import ProjectStore from '../../../stores/ProjectStore'
import AuthApi from '../../../../authentication/services/AuthService'
import AuthStore from '../../../../authentication/stores/AuthStore'
import { Provider } from 'mobx-react'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'> {location.pathname}</div>
))
describe('ProjectManagementPlatformDashboard', () => {
   let projectStore
   let projectService
   let authStore
   let authService
   beforeEach(() => {
      projectService = new ProjectsFixtureService()
      projectStore = new ProjectStore(projectService)
      authService = new AuthApi()
      authStore = new AuthStore(authService)
   })
   it('should check header is rendered', () => {
      const { getByText } = render(
         <Provider projectStore={projectStore} authStore={authStore}>
            <Route history={createMemoryHistory()}>
               <ProjectManagementPlatformDashboard />
            </Route>
         </Provider>
      )
      // getByText(i18n.projectTitle)
   })
})
