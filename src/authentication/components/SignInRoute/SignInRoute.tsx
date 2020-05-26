import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import i18n from '../../../i18n/strings.json'
import SignInComponent from '../SignInComponent'
import { SignInComponentWrapper } from './styledComponents'

@inject('authStore')
@observer
class SignInRoute extends React.Component<{ authStore: any }> {
   @observable username = ''
   @observable password = ''
   @observable isUsernameHasError = false
   @observable isPasswordHasError = false
   @observable usernameErrorMessage = ''
   @observable passwordErrorMessage = ''

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
      if (username.length !== 0) {
         if (password.length !== 0) {
            this.doNetworkCalls()
         } else {
            this.passwordErrorMessage = i18n.invalidPasswordErrorText
            this.isPasswordHasError = true
         }
      } else {
         this.usernameErrorMessage = i18n.invalidUsernameErrorText
         this.isUsernameHasError = true
      }
   }
   @action.bound
   handleSubmit(event) {
      event.preventDefault()
      this.onValidation()
   }
   @action.bound
   doNetworkCalls() {
      // const { authStore } = this.props
      // const loginCredentials = {
      //    username: this.username,
      //    password: this.password
      // }
   }
   @action.bound
   onLoginSuccess() {}
   @action.bound
   onLoginFailure() {}

   render() {
      const {
         username,
         password,
         usernameErrorMessage,
         passwordErrorMessage,
         isPasswordHasError,
         isUsernameHasError,
         handleUsername,
         handlePassword,
         onValidation,
         handleSubmit
      } = this
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
            />
         </SignInComponentWrapper>
      )
   }
}
export { SignInRoute }
