import React from 'react'
import Loader from 'react-loader-spinner'

import { API_FETCHING } from '@ib/api-constants'

import { Typo14WhiteRubikMedium } from '../../../styleGuide/Typos'

import { Button } from './styledComponent'

const CommonButton = props => (
   <Button
      disabled={props.isDisabled}
      onClick={event => props.handleClick(event, props.buttonValue)}
      bgColor={props.bgColor}
      width={props.width}
      height={props.height}
      borderColor={props.borderColor}
      textColor={props.textColor}
      data-testid={props.testId}
   >
      {props.apiStatus === API_FETCHING ? (
         <Loader
            type='Oval'
            height={25}
            width={25}
            color={'white'}
            data-testid='loader'
            disabled={true}
         />
      ) : (
         <Typo14WhiteRubikMedium>{props.buttonValue}</Typo14WhiteRubikMedium>
      )}
   </Button>
)
export default CommonButton
