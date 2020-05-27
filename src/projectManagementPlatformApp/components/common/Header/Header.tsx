import React from 'react'
import Logo from '../../../../common/components/Logo/Logo'
import i18n from '../../../../i18n/strings.json'
import { Typo24DarkBlueGreyHKGroteskMedium } from '../../../../styleGuide/Typos'
import {
   HeaderWrapper,
   IbHubsLogo,
   ChildWrapper,
   ProfileWrapper
} from './styledComponent'
import UserProfile from '../UserProfile'
class Header extends React.Component {
   render() {
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
            <ProfileWrapper>
               <UserProfile />
            </ProfileWrapper>
         </HeaderWrapper>
      )
   }
}
export { Header }
