import React from 'react'
import { Button } from './styledComponent'
import { Typo14WhiteRubikMedium } from '../../styleGuide/Typos'

const CommonButton = props => (
   <Button disabled={props.isDisabled} onSubmit={props.handleClick}>
      <Typo14WhiteRubikMedium>{props.buttonValue}</Typo14WhiteRubikMedium>
   </Button>
)
export default CommonButton
