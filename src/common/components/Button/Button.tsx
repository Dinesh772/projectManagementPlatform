import React, { Component } from 'react'
import {
   PrimaryButton,
   SecondaryButton,
   DefaultButton
} from './styledComponent'
import {
   PRIMARY_BUTTON,
   SECONDARY_BUTTON,
   DEFAULT_BUTTON
} from '../../constants/ButtonTypeConstants'
import { Typo18BoldHKGroteskRegularButtonText } from '../../../styleGuide/Typos'

type ButtonProps = {
   value: string
   type: string
}

export default class Button extends Component<ButtonProps> {
   static defaultProps = {
      type: DEFAULT_BUTTON
   }
   render() {
      const { type, value } = this.props
      switch (type) {
         case PRIMARY_BUTTON:
            return <PrimaryButton>{value}</PrimaryButton>
         case SECONDARY_BUTTON:
            return <SecondaryButton>{value}</SecondaryButton>
         default:
            return (
               <DefaultButton cssTypo={Typo18BoldHKGroteskRegularButtonText}>
                  {value}
               </DefaultButton>
            )
      }
   }
}
