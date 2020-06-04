import React from 'react'
import { observer } from 'mobx-react'

import {
   FailureViewContainer,
   FailureViewMessage,
   RetryButton
} from './styledComponents'
import Logo from '../Logo/Logo'
import i18n from '../../../i18n/strings.json'
@observer
class FailureView extends React.Component<{
   onRetryClick: any
   errorMessage: any
   height?: any
}> {
   render() {
      const { onRetryClick, errorMessage } = this.props

      return (
         <FailureViewContainer height={this.props.height}>
            <Logo
               src={i18n.somethingWentWrongSrc}
               height={'280px'}
               width={'280px'}
               alt={i18n.somethingWentWrongAlt}
            />
            <FailureViewMessage>{errorMessage}</FailureViewMessage>
            <RetryButton onClick={onRetryClick}>Retry</RetryButton>
         </FailureViewContainer>
      )
   }
}

export default FailureView
// src={props.src ?? i18n.logoSrcWithText}
// alt={props.alt ?? props.i18n.logoAlt}
// height={props.height}
// width={props.width}
