import React from 'react'
import { Typo16HKGroteskMedium } from '../../../styleGuide/Typos'
import { CheckboxWrapper, InputCheckbox } from './styledComponent'
export const Checkbox = props => (
   <CheckboxWrapper>
      <InputCheckbox type='checkbox' onClick={props.handleClick} />
      <p> {props.text}</p>
   </CheckboxWrapper>
)
