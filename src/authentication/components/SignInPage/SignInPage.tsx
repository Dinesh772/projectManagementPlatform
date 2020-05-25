import React from 'react'
import {SignInWrapper} from './StyledComponents'
import { InputElement } from "../../../components/InputElement/InputElement"

type propsType={
    username:string,
    password:string,
    errorMessages:Object,
}

class SignInPage extends React.Component<propsType>{
    render(){
        return (
            <SignInWrapper>
                <InputElement />
            </SignInWrapper>
        )
    }
}
export {SignInPage}