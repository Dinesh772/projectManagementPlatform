import React from 'react'
import { Typo16HKGroteskMedium } from '../../../styleGuide/Typos'
import { CheckboxWrapper, InputCheckbox, Text } from './styledComponent'
export const Checkbox = props => (
   <CheckboxWrapper>
      <InputCheckbox type='checkbox' onClick={props.handleClick} />
      <Text>{props.text}</Text>
   </CheckboxWrapper>
)
