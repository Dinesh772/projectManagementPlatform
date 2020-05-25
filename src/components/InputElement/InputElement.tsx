import React from 'react'

import {InputField,InputWrapper,ErrorField} from './StyledComponent'
export const InputElement=(props)=>{
    return(
        <InputWrapper>
            <label>{props.labelText}<InputField type='text'   /></label>
            <ErrorField></ErrorField>
        </InputWrapper>
    )
}
