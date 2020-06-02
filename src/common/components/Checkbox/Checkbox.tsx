import React from 'react'
import { CheckboxWrapper, InputCheckbox, Text } from './styledComponent'
export const Checkbox = props => (
   <CheckboxWrapper>
      <InputCheckbox type='checkbox' onClick={props.handleClick} />
      <Text>{props.text}</Text>
   </CheckboxWrapper>
)
