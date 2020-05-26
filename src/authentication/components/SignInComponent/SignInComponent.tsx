import React from 'react'
import UserTextInputField from '../../../components/UserTextInputField/UserTextInputField'
import { Typo26DarkBlueGreyRubikRegular } from '../../../styleGuide/Typos/index'
import LoginButton from '../../../components/CommonButton/CommonButton'
import {
   SignInWrapper,
   IbHubsLogo,
   UsernameWrapper,
   PasswordWrapper
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
   handleSubmit: any
}

class SignInComponent extends React.Component<PropsType> {
   render() {
      const {
         userGreetText,
         pleaseSignIn,
         usernameLabel,
         passwordLabel,
         login,
         passwordType
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
         handleSubmit
      } = this.props
      return (
         <SignInWrapper onSubmit={handleSubmit}>
            <IbHubsLogo
               src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/9837b0f6-9165-49b3-995e-c6ac4ed19c55.svg'
               alt='logo'
            />
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
               />
            </PasswordWrapper>
            <LoginButton
               handleClick={handleSubmit}
               buttonValue={login}
               isDisabled={false}
            />
         </SignInWrapper>
      )
   }
}
export { SignInComponent }
