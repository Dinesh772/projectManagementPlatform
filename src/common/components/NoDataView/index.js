import React from 'react'

import {
   NoDataViewContainer,
   NoDataViewText,
   ImageWrapper
} from './styledComponents'
import i18n from '../../../i18n/strings.json'
import Avatar from '../Avatar/Avatar'
import { Typo24DarkBlueGreyHKGroteskMedium } from '../../../styleGuide/Typos'

class NoDataView extends React.Component {
   render() {
      return (
         <NoDataViewContainer>
            <ImageWrapper>
               <Avatar
                  height={'300px'}
                  width={'300px'}
                  path={i18n.noDataImageSrc}
                  altText={i18n.noDataAlt}
               />
            </ImageWrapper>
            <NoDataViewText>
               <Typo24DarkBlueGreyHKGroteskMedium>
                  {this.props.text ?? i18n.noDataText}
               </Typo24DarkBlueGreyHKGroteskMedium>
            </NoDataViewText>
         </NoDataViewContainer>
      )
   }
}

export default NoDataView
