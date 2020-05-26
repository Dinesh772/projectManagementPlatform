import React from 'react'
import {
   Typo12SteelHKGroteskSemiBold,
   Typo12NeonRedHKGroteskRegular
} from '../../styleGuide/Typos/index'
import { InputField, InputWrapper } from './styledComponent'
import i18n from '../../i18n/strings.json'
const UserTextInputField = props => (
   <InputWrapper>
      <Typo12SteelHKGroteskSemiBold>
         {props.labelText}
      </Typo12SteelHKGroteskSemiBold>
      <InputField
         ref={props.setRef}
         type={props.type ?? i18n.text}
         value={props.value}
         onChange={props.onChange}
         onBlur={props.validate}
         hasError={props.hasError}
         placeholder={props.placeholder ?? ''}
      />
      <Typo12NeonRedHKGroteskRegular>
         {props.errorMessage}
      </Typo12NeonRedHKGroteskRegular>
   </InputWrapper>
)
export default UserTextInputField
