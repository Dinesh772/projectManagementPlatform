import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'

import i18n from '../../../i18n/strings.json'
import SignInComponent from '../SignInComponent'
import { SignInComponentWrapper } from './styledComponents'
import { stringValidator } from '../../utils/ValidationUtils/ValidationUtils'
import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../../Common/constants/RouteConstants'
type propsType = {
   history: History
   authStore: any
}
@inject('authStore')
@observer
class SignInRoute extends React.Component<propsType> {
   @observable username = ''
   @observable password = ''
   @observable isUsernameHasError = false
   @observable isPasswordHasError = false
   @observable usernameErrorMessage = ''
   @observable passwordErrorMessage = ''
   @observable loginFailureErrorMessage = ''
   @observable isValidated = false
   @action.bound
   handleUsername(event) {
      const usernameValue = event.target.value
      if (usernameValue.length !== 0) {
         this.username = usernameValue
         this.usernameErrorMessage = ''
         this.isUsernameHasError = false
      } else {
         this.username = usernameValue
         this.onValidation()
      }
   }
   @action.bound
   handlePassword(event) {
      const passwordValue = event.target.value
      if (passwordValue.length !== 0) {
         this.password = passwordValue
         this.passwordErrorMessage = ''
         this.isPasswordHasError = false
      } else {
         this.password = passwordValue
         this.onValidation()
      }
   }
   @action.bound
   onValidation() {
      const { username, password } = this
      if (!stringValidator(username)) {
         this.usernameErrorMessage = i18n.invalidUsernameErrorText
         this.isUsernameHasError = true
         this.isValidated = false
      }
      if (!stringValidator(password)) {
         this.passwordErrorMessage = i18n.invalidPasswordErrorText
         this.isPasswordHasError = true
         this.isValidated = false
      }
      if (stringValidator(username) && stringValidator(password)) {
         this.isValidated = true
      }
   }
   @action.bound
   handleSubmit(event) {
      event.preventDefault()
      if (this.isValidated) {
         this.doNetworkCalls()
      } else {
         this.onValidation()
      }
   }
   @action.bound
   doNetworkCalls() {
      const { authStore } = this.props
      const loginCredentials = {
         username: this.username,
         password: this.password
      }
      authStore.getSignInAPI(
         loginCredentials,
         this.onLoginSuccess,
         this.onLoginFailure
      )
   }
   @action.bound
   onLoginSuccess() {
      const { history } = this.props
      const path = PROJECT_MANAGEMENT_PLATFORM_DASHBOARD
      history.push(path)
   }
   @action.bound
   onLoginFailure(error) {
      this.loginFailureErrorMessage = error.message
   }

   render() {
      const {
         username,
         password,
         usernameErrorMessage,
         passwordErrorMessage,
         isPasswordHasError,
         isUsernameHasError,
         loginFailureErrorMessage,
         handleUsername,
         handlePassword,
         onValidation,
         handleSubmit
      } = this
      const { accessToken, getSignInApiStatus } = this.props.authStore
      if (accessToken) {
         this.onLoginSuccess()
      }
      return (
         <SignInComponentWrapper>
            <SignInComponent
               username={username}
               password={password}
               handleUsername={handleUsername}
               handlePassword={handlePassword}
               usernameErrorMessage={usernameErrorMessage}
               passwordErrorMessage={passwordErrorMessage}
               isPasswordHasError={isPasswordHasError}
               isUsernameHasError={isUsernameHasError}
               validate={onValidation}
               i18n={i18n}
               handleSubmit={handleSubmit}
               getSignInApiStatus={getSignInApiStatus}
               loginApiFailureMessage={loginFailureErrorMessage}
            />
         </SignInComponentWrapper>
      )
   }
}
export default withRouter(SignInRoute)
