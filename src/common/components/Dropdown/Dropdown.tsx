import React from 'react'
import { DropDownWrapper, OptionElement } from './styledComponent'
import {
   Typo12SteelHKGroteskSemiBold,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos'
export const Dropdown = props => (
   <React.Fragment>
      <Typo12SteelHKGroteskSemiBold>{props.label}</Typo12SteelHKGroteskSemiBold>
      <br></br>
      <DropDownWrapper onChange={props.handleChange} width={props.width}>
         {props.values.map(eachValue => (
            <OptionElement value={eachValue}>{eachValue}</OptionElement>
         ))}
      </DropDownWrapper>
      <Typo12NeonRedHKGroteskRegular>
         {props.errorMessage}
      </Typo12NeonRedHKGroteskRegular>
   </React.Fragment>
)
