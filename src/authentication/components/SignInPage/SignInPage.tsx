import React from 'react'
import {SignInWrapper,IbHubsLogo,Username,Password} from './StyledComponents'
import  UserInputField  from "../../../components/UserInputField/UserInputField";
import {Typo32DarkBlueGreyRubikRegular} from '../../../styleGuide/Typos/index';
import i18n from '../../../i18n/strings.json'
import LoginButton from "../../../components/SignInButton/SignInButton";

type PropsType={
    username:string;
    password:string;
    handleUsername:Function;
    handlePassword:Function;
    usernameErrorMessage:string,
    passwordErrorMessage:string,
    isPasswordHasError:boolean,
    isUsernameHasError:boolean,
    validate:Function
}

class SignInPage extends React.Component<PropsType>{
    render(){
        const {userGreetText,pleaseSignIn,usernameLabel,passwordLabel,login}=i18n
        const {username,password,handleUsername,handlePassword,usernameErrorMessage,validate,passwordErrorMessage,isPasswordHasError,isUsernameHasError}=this.props
        return (
            <SignInWrapper>
                <IbHubsLogo src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/9837b0f6-9165-49b3-995e-c6ac4ed19c55.svg" alt='logo' />
        <Typo32DarkBlueGreyRubikRegular>{userGreetText}<br></br>{pleaseSignIn}</Typo32DarkBlueGreyRubikRegular>
                <Username>
                <UserInputField labelText={usernameLabel} 
                errorMessage={usernameErrorMessage}
                hasError={isUsernameHasError}
                value={username}
                changeEvent={handleUsername}
                validate={validate}
                />
                </Username>
                <Password>
                <UserInputField labelText={passwordLabel} 
                errorMessage={passwordErrorMessage}
                value={password}
                hasError={isPasswordHasError}
                changeEvent={handlePassword}
                validate={validate}
                />
                </Password>
                <LoginButton buttonValue={login} isDisabled={false} />
            </SignInWrapper>
        )
    }
}
export {SignInPage}