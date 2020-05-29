import React from 'react'
import {
   DropDownWrapper,
   OptionElement,
   ErrorMessageWrapper
} from './styledComponent'
import {
   Typo12SteelHKGroteskSemiBold,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos'
export const Dropdown = props => (
   <React.Fragment>
      <Typo12SteelHKGroteskSemiBold>{props.label}</Typo12SteelHKGroteskSemiBold>
      <br></br>
      <DropDownWrapper
         onFocus={props.handleFocus}
         onChange={props.handleChange}
         width={props.width}
      >
         <OptionElement value={props.placeholder} hidden>
            {props.placeholder}
         </OptionElement>
         {props.values.map(eachValue => (
            <OptionElement value={eachValue}>{eachValue}</OptionElement>
         ))}
      </DropDownWrapper>
      <ErrorMessageWrapper>
         <Typo12NeonRedHKGroteskRegular>
            {props.errorMessage}
         </Typo12NeonRedHKGroteskRegular>
      </ErrorMessageWrapper>
   </React.Fragment>
)
