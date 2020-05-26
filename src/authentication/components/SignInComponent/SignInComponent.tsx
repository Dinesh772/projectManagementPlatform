import React from 'react'
import UserTextInputField from '../../../components/UserTextInputField/UserTextInputField'
import { Typo32DarkBlueGreyRubikRegular } from '../../../styleGuide/Typos/index'
import LoginButton from '../../../components/CommonButton/CommonButton'
import {
   SignInWrapper,
   IbHubsLogo,
   Username,
   Password
} from './styledComponents'

type PropsType = {
   username: string
   password: string
   handleUsername: Function
   handlePassword: Function
   usernameErrorMessage: string
   passwordErrorMessage: string
   isPasswordHasError: boolean
   isUsernameHasError: boolean
   validate: Function
   i18n: any
}

class SignInComponent extends React.Component<PropsType> {
   render() {
      const {
         userGreetText,
         pleaseSignIn,
         usernameLabel,
         passwordLabel,
         login
      } = this.props.i18n
      const {
         username,
         password,
         handleUsername,
         handlePassword,
         usernameErrorMessage,
         validate,
         passwordErrorMessage,
         isPasswordHasError,
         isUsernameHasError
      } = this.props
      return (
         <SignInWrapper>
            <IbHubsLogo
               src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/9837b0f6-9165-49b3-995e-c6ac4ed19c55.svg'
               alt='logo'
            />
            <Typo32DarkBlueGreyRubikRegular>
               {userGreetText}
               <br></br>
               {pleaseSignIn}
            </Typo32DarkBlueGreyRubikRegular>

            <Username>
               <UserTextInputField
                  labelText={usernameLabel}
                  errorMessage={usernameErrorMessage}
                  hasError={isUsernameHasError}
                  value={username}
                  onChange={handleUsername}
                  validate={validate}
               />
            </Username>
            <Password>
               <UserTextInputField
                  labelText={passwordLabel}
                  errorMessage={passwordErrorMessage}
                  value={password}
                  type='password'
                  hasError={isPasswordHasError}
                  onChange={handlePassword}
                  validate={validate}
               />
            </Password>
            <LoginButton buttonValue={login} isDisabled={false} />
         </SignInWrapper>
      )
   }
}
export { SignInComponent }
