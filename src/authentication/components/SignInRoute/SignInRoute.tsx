import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react";

import SignInPage from "../SignInPage";

@observer
class SignInRoute extends React.Component{
    @observable username='';
    @observable password='';
    @observable errorMessages={
        usernameError:'',
        passwordError:'',
        loginError:''
    }

    handleUsername=(event)=>{
        const usernameValue=event.target.value;
        this.username=usernameValue;
    }
    handlePassword=(event)=>{
        const passwordValue=event.target.value;
        this.password=passwordValue;
    }
    onValidation=()=>{
        
    }
    render(){
        const {username,password,errorMessages}=this
        return(
            <SignInPage username={username} password={password} errorMessages={errorMessages} />
        )
    }
}
export {SignInRoute}