import React from 'react'
import {
   Typo12SteelHKGroteskSemiBold,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos/index'
import { InputField, InputWrapper } from './styledComponent'

const UserTextInputField = props => (
   <InputWrapper>
      <Typo12SteelHKGroteskSemiBold>
         {props.labelText}
      </Typo12SteelHKGroteskSemiBold>
      <InputField
         ref={props.setRef}
         type={props.type}
         value={props.value}
         onChange={props.onChange}
         onBlur={props.validate}
         width={props.width}
         hasError={props.hasError}
         placeholder={props.placeholder ?? ''}
         data-testid={props.testId}
      />
      <Typo12NeonRedHKGroteskRegular>
         {props.errorMessage}
      </Typo12NeonRedHKGroteskRegular>
   </InputWrapper>
)
export default UserTextInputField
