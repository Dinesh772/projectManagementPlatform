import React from 'react'
import { Button } from './styledComponent'
import Loader from 'react-loader-spinner'
const CommonButton = props => (
   <Button disabled={props.isDisabled} onSubmit={props.handleClick}>
      <Loader
         type='Oval'
         height={25}
         width={25}
         color={'white'}
         data-testid='loader'
      />
   </Button>
)
export default CommonButton
