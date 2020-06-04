import React from 'react'

import Logo from '../../../../Common/components/Logo/Logo'
import i18n from '../../../../i18n/strings.json'
import { Typo24DarkBlueGreyHKGroteskMedium } from '../../../../styleGuide/Typos'
import UserProfile from '../UserProfile'

import {
   HeaderWrapper,
   IbHubsLogo,
   ChildWrapper,
   ProfileWrapper
} from './styledComponent'
class Header extends React.Component<{
   handleProfileClick: any
}> {
   render() {
      const { handleProfileClick } = this.props
      return (
         <HeaderWrapper>
            <ChildWrapper>
               <IbHubsLogo>
                  <Logo alt={i18n.logoAlt} height={'65px'} width={'65px'} />
               </IbHubsLogo>
               <Typo24DarkBlueGreyHKGroteskMedium>
                  {i18n.projectTitle}
               </Typo24DarkBlueGreyHKGroteskMedium>
            </ChildWrapper>
            <ProfileWrapper onClick={handleProfileClick}>
               <UserProfile />
            </ProfileWrapper>
         </HeaderWrapper>
      )
   }
}
export { Header }
