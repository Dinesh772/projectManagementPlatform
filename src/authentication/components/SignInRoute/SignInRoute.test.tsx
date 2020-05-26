import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SignInRoute from '.'
import AuthApi from '../../services/AuthService/index'
import { AuthStore } from '../../stores/AuthStore/AuthStore'
import i18n from '../../../i18n/strings.json'
describe('SignInRoute component tests', () => {
   let authApi
   let authStore
   beforeEach(() => {
      authApi = new AuthApi()
      authStore = new AuthStore(authApi)
   })
   it('should test component should render', () => {
      const { getByText } = render(<SignInRoute authStore={authStore} />)
      getByText(i18n.usernameLabel)
      getByText(i18n.passwordLabel)
      getByText(i18n.login)
   })
   it('should show username error message onLogin click', () => {
      const { getByRole, getByText } = render(
         <SignInRoute authStore={authStore} />
      )
      const loginButton = getByRole('button', { name: i18n.login })
      fireEvent.click(loginButton)
      getByText(i18n.invalidUsernameErrorText)
   })
})
