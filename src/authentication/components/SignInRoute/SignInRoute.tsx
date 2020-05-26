import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import i18n from '../../../i18n/strings.json'
import SignInComponent from '../SignInComponent'
import { SignInPageWrapper } from './styledComponents'

@observer
class SignInRoute extends React.Component {
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
         } else {
            this.passwordErrorMessage = i18n.invalidPasswordErrorText
            this.isPasswordHasError = true
         }
      } else {
         this.usernameErrorMessage = i18n.invalidUsernameErrorText
         this.isUsernameHasError = true
      }
   }

   render() {
      const {
         username,
         password,
         usernameErrorMessage,
         passwordErrorMessage,
         isPasswordHasError,
         isUsernameHasError,
         onValidation
      } = this
      return (
         <SignInPageWrapper>
            <SignInComponent
               username={username}
               password={password}
               handleUsername={this.handleUsername}
               handlePassword={this.handlePassword}
               usernameErrorMessage={usernameErrorMessage}
               passwordErrorMessage={passwordErrorMessage}
               isPasswordHasError={isPasswordHasError}
               isUsernameHasError={isUsernameHasError}
               validate={onValidation}
               i18n={i18n}
            />
         </SignInPageWrapper>
      )
   }
}
export { SignInRoute }
