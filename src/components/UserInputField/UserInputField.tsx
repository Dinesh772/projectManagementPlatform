import React from 'react'
import {Typo12SteelHKGroteskSemiBold} from '../../styleGuide/Typos/index'
import {InputField,InputWrapper,ErrorField} from './StyledComponent'
 const UserInputField=(props)=>(
        <InputWrapper>
            <Typo12SteelHKGroteskSemiBold>{props.labelText}</Typo12SteelHKGroteskSemiBold>
            <InputField type='text'
            value={props.value}
            onChange={props.changeEvent} hasError={props.hasError} onBlur={props.validate}
            />
            <ErrorField>{props.errorMessage}</ErrorField>
        </InputWrapper>
    )
export default UserInputField