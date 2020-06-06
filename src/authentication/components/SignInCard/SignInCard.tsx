import React from 'react'
import { observer } from 'mobx-react'
import { API_FAILED } from '@ib/api-constants'

import UserTextInputField from '../../../Common/components/UserTextInputField/UserTextInputField'
import {
   Typo26DarkBlueGreyRubikRegular,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos/index'
import LoginButton from '../../../Common/components/CommonButton/CommonButton'
import Logo from '../../../Common/components/Logo/Logo'

import {
   SignInWrapper,
   IbHubsLogo,
   UsernameWrapper,
   PasswordWrapper,
   LoginFailure
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
   getSignInApiStatus: any
   handleSubmit: any
   loginApiFailureMessage: string
}

@observer
class SignInCard extends React.Component<PropsType> {
   render() {
      const {
         userGreetText,
         pleaseSignIn,
         usernameLabel,
         passwordLabel,
         login,
         passwordType,
         loginFailureErrorMessage,
         usernameTestId,
         passwordTestId,
         iBhubsLogoAlt,
         logoSrc
      } = this.props.i18n
      const {
         username,
         password,
         handleUsername,
         handlePassword,
         usernameErrorMessage,
         passwordErrorMessage,
         isPasswordHasError,
         isUsernameHasError,
         handleSubmit,
         getSignInApiStatus,
         loginApiFailureMessage
      } = this.props

      return (
         <SignInWrapper>
            <IbHubsLogo>
               <Logo alt={iBhubsLogoAlt} src={logoSrc} />
            </IbHubsLogo>
            <Typo26DarkBlueGreyRubikRegular>
               {userGreetText}
               <br></br>
               {pleaseSignIn}
            </Typo26DarkBlueGreyRubikRegular>

            <UsernameWrapper>
               <UserTextInputField
                  labelText={usernameLabel}
                  errorMessage={usernameErrorMessage}
                  hasError={isUsernameHasError}
                  value={username}
                  onChange={handleUsername}
                  validate={handleUsername}
                  testId={usernameTestId}
               />
            </UsernameWrapper>
            <PasswordWrapper>
               <UserTextInputField
                  labelText={passwordLabel}
                  errorMessage={passwordErrorMessage}
                  value={password}
                  type={passwordType}
                  hasError={isPasswordHasError}
                  onChange={handlePassword}
                  validate={handlePassword}
                  testId={passwordTestId}
               />
            </PasswordWrapper>
            <LoginButton
               handleClick={handleSubmit}
               buttonValue={login}
               apiStatus={getSignInApiStatus}
            />
            <LoginFailure hide={getSignInApiStatus === API_FAILED}>
               <Typo12NeonRedHKGroteskRegular>
                  {loginApiFailureMessage !== undefined
                     ? loginApiFailureMessage
                     : loginFailureErrorMessage}
               </Typo12NeonRedHKGroteskRegular>
            </LoginFailure>
         </SignInWrapper>
      )
   }
}
export { SignInCard }
