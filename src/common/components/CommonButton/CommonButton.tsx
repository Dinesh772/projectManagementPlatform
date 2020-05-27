import React from 'react'
import Loader from 'react-loader-spinner'

import { Button } from './styledComponent'
import { Typo14WhiteRubikMedium } from '../../../styleGuide/Typos'
import { API_FETCHING } from '@ib/api-constants'

const CommonButton = props => (
   <Button
      disabled={props.isDisabled}
      onClick={props.handleClick}
      bgColor={props.bgColor}
      width={props.width}
      height={props.height}
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
