import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'

//import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../../Common/constants/RouteConstants'
import i18n from '../../../i18n/strings.json'

import { stringValidator } from '../../utils/ValidationUtils/ValidationUtils'

import SignInCard from '../SignInCard'

import { SignInComponentWrapper } from './styledComponents'
import { GoToHomePage } from '../../utils/NavigationUtils'

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
      this.username = usernameValue
      if (usernameValue.length !== 0) {
         this.usernameErrorMessage = ''
         this.isUsernameHasError = false
         this.onValidation()
      } else {
         this.usernameErrorMessage = i18n.invalidUsernameErrorText
         this.isUsernameHasError = true
         this.isValidated = false
      }
   }
   @action.bound
   handlePassword(event) {
      const passwordValue = event.target.value
      this.password = passwordValue
      if (stringValidator(passwordValue)) {
         this.passwordErrorMessage = ''
         this.isPasswordHasError = false
         this.onValidation()
      } else {
         this.passwordErrorMessage = i18n.invalidPasswordErrorText
         this.isPasswordHasError = true
         this.isValidated = false
      }
   }
   @action.bound
   onValidation() {
      const { username, password } = this
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
         if (!stringValidator(this.username)) {
            this.usernameErrorMessage = i18n.invalidUsernameErrorText
            this.isUsernameHasError = true
            this.isValidated = false
         } else if (!stringValidator(this.password)) {
            this.passwordErrorMessage = i18n.invalidPasswordErrorText
            this.isPasswordHasError = true
            this.isValidated = false
         }
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
      // const path = PROJECT_MANAGEMENT_PLATFORM_DASHBOARD
      // history.replace(path)
      GoToHomePage(history)
   }
   @action.bound
   onLoginFailure(error) {
      this.loginFailureErrorMessage = error
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
            <SignInCard
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
