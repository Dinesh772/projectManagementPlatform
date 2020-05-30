import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import { Router, Route, withRouter } from 'react-router-dom'

import i18n from '../../../i18n/strings.json'
import AuthApi from '../../services/AuthService/index'
import { AuthStore } from '../../stores/AuthStore/AuthStore'
import signInFixtures from '../../fixtures/signInFixtures.json'
import SignInRoute from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>hello world{location.pathname}</div>
))
describe('SignInRoute component tests', () => {
   let authApi
   let authStore
   beforeEach(() => {
      authApi = new AuthApi()
      authStore = new AuthStore(authApi)
   })
   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should test component should render', () => {
      const { getByText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      )
      expect(getByText(i18n.usernameLabel)).toBeVisible()
      expect(getByText(i18n.passwordLabel)).toBeVisible()
      expect(getByText(i18n.login)).toBeVisible()
   })
   // it('should show username error message onLogin click', () => {
   //    const { getByRole, getByText } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignInRoute authStore={authStore} />
   //       </Router>
   //    )
   //    const loginButton = getByText(i18n.login)

   //    fireEvent.click(loginButton)
   //    expect(getByText(i18n.invalidUsernameErrorText)).toBeVisible()
   // })
   // it('should test password error message onClick login without entering password', () => {
   //    const { getByTestId, getByRole, getByText } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignInRoute authStore={authStore} />
   //       </Router>
   //    )
   //    const loginButton = getByRole('button', { name: i18n.login })
   //    const username = 'test-user'
   //    const usernameField = getByTestId(i18n.usernameTestId)

   //    fireEvent.change(usernameField, { target: { value: username } })
   //    fireEvent.click(loginButton)
   //    getByText(i18n.invalidPasswordErrorText)
   // })
   // it('should test fetching state onClick login', async () => {
   //    const { getByTestId, getByRole, getByLabelText } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignInRoute authStore={authStore} />
   //       </Router>
   //    )
   //    const loginButton = getByRole('button', { name: i18n.login })
   //    const username = 'test-user'
   //    const password = 'test-password'
   //    const usernameField = getByTestId(i18n.usernameTestId)
   //    const passwordField = getByTestId(i18n.passwordTestId)

   //    const mockLoadingPromise = new Promise(function(resolve, reject) {})
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockLoadingPromise)
   //    authApi.signInAPI = mockSignInAPI

   //    fireEvent.change(usernameField, { target: { value: username } })
   //    fireEvent.change(passwordField, { target: { value: password } })
   //    fireEvent.click(loginButton)
   //    getByLabelText('audio-loading')
   // })

   it('should test login failure state', async () => {
      const { getByRole, getByTestId, getByText } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
         </Router>
      )
      const loginButton = getByRole('button', { name: i18n.login })
      const username = 'test-user'
      const password = 'test-password'
      const usernameField = getByTestId(i18n.usernameTestId)
      const passwordField = getByTestId(i18n.passwordTestId)

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authApi.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(loginButton)

      waitFor(() => {
         getByText(i18n.loginFailureErrorMessage)
      })
   })
   it('should test login success state', async () => {
      const history = createMemoryHistory()
      const route = '/'
      history.replace(route)
      const { getByRole, getByTestId, queryByRole } = render(
         <Provider authStore={authStore}>
            <Router history={history}>
               <Route path='/'>
                  <SignInRoute />
               </Route>
               <Route path='/project-management-platform/dashboard'>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const loginButton = getByRole('button', { name: i18n.login })
      const username = 'test-user'
      const password = 'test-password'
      const usernameField = getByTestId(i18n.usernameTestId)
      const passwordField = getByTestId(i18n.passwordTestId)

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(signInFixtures)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authApi.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(loginButton)
      waitFor(() => {
         expect(
            queryByRole('button', { name: i18n.login })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(
            '/project-management-platform/dashboard'
         )
      })
   })
})
