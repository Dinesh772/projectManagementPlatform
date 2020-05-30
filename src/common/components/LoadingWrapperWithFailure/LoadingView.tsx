import React from 'react'

import Loader from 'react-loader-spinner'

import { LoadingViewContainer } from './styledComponents'
import { Colors } from '../../../themes/Colors'

class LoadingView extends React.Component {
   render() {
      return (
         <LoadingViewContainer>
            <Loader
               type='TailSpin'
               color={Colors.brightBlue}
               height={60}
               width={60}
            />
         </LoadingViewContainer>
      )
   }
}

export default LoadingView
