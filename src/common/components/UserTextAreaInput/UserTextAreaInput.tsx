import React from 'react'
import { TextareaWrapper } from './styledComponent'
import {
   Typo12SteelHKGroteskSemiBold,
   Typo12NeonRedHKGroteskRegular
} from '../../../styleGuide/Typos'
export const UserTextareaInput = props => (
   <React.Fragment>
      <Typo12SteelHKGroteskSemiBold>{props.label}</Typo12SteelHKGroteskSemiBold>
      <TextareaWrapper
         rows={props.rows ?? '4'}
         cols={props.cols ?? '5'}
         width={props.width}
         onChange={props.onChange}
         hasError={props.hasError}
         onBlur={props.validate}
         data-testid={props.testId}
      >
         {props.value}
      </TextareaWrapper>
      <Typo12NeonRedHKGroteskRegular>
         {props.errorMessage}
      </Typo12NeonRedHKGroteskRegular>
   </React.Fragment>
)
