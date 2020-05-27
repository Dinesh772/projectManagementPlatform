import React from 'react'
import UserTextInputField from '../../../components/UserTextInputField/UserTextInputField'
import {
   Typo26DarkBlueGreyRubikRegular,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos/index'
import LoginButton from '../../../components/CommonButton/CommonButton'
import FetchingButton from '../../../components/CommonFetchingButton/CommonFetchingButton'
import {
   SignInWrapper,
   IbHubsLogo,
   UsernameWrapper,
   PasswordWrapper,
   LoginFailure
} from './styledComponents'
import { observer } from 'mobx-react'
import Logo from '../../../components/Logo/Logo'

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
   loginFailureErrorMessage: string
}

@observer
class SignInComponent extends React.Component<PropsType> {
   render() {
      const {
         userGreetText,
         pleaseSignIn,
         usernameLabel,
         passwordLabel,
         login,
         passwordType,
         loginError,
         usernameTestId,
         passwordTestId,
         iBhubsLogoAlt
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
         isUsernameHasError,
         handleSubmit,
         getSignInApiStatus,
         loginFailureErrorMessage
      } = this.props
      console.log(loginFailureErrorMessage)
      return (
         <SignInWrapper onSubmit={handleSubmit}>
            <IbHubsLogo>
               <Logo alt={iBhubsLogoAlt} />
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
                  validate={validate}
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
                  validate={validate}
                  testId={passwordTestId}
               />
            </PasswordWrapper>
            {getSignInApiStatus === 100 ? (
               <FetchingButton />
            ) : (
               <LoginButton
                  handleClick={handleSubmit}
                  buttonValue={login}
                  isDisabled={false}
               />
            )}
            <LoginFailure hide={getSignInApiStatus === 400}>
               <Typo12NeonRedHKGroteskRegular>
                  {loginFailureErrorMessage !== undefined
                     ? loginFailureErrorMessage
                     : loginError}
               </Typo12NeonRedHKGroteskRegular>
            </LoginFailure>
         </SignInWrapper>
      )
   }
}
export { SignInComponent }
