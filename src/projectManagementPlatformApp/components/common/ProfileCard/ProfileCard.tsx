import React from 'react'

import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import { Colors } from '../../../../themes/Colors'
import Avatar from '../../../../common/components/Avatar/Avatar'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'

import Logout from '../Logout/Logout'

import {
   ProfileCardWrapper,
   AvatarWrapper,
   ProfileDetails,
   LogoutWrapper
} from './styledComponent'

class ProfileCard extends React.Component<{
   handleProfile: any
   handleLogout: any
}> {
   render() {
      const { handleProfile, handleLogout } = this.props
      return (
         <ProfileCardWrapper>
            <CommonButton
               buttonValue={i18n.close}
               handleClick={handleProfile}
               height={'30px'}
               width={'80px'}
               color={Colors.darkBlueGrey}
               bgColor={Colors.steel}
            />
            <AvatarWrapper>
               <Avatar
                  path={i18n.avatarImageSrc}
                  alt={i18n.logoAlt}
                  height={'200px'}
                  width={'200px'}
               />
            </AvatarWrapper>
            <ProfileDetails>
               <Typo18HKGroteskRegular>
                  <b>{i18n.name}</b>: {i18n.usernameLabel}
               </Typo18HKGroteskRegular>
               <Typo18HKGroteskRegular>
                  <b>{i18n.userId}</b>: {i18n.mockUsername}
               </Typo18HKGroteskRegular>
               <Typo18HKGroteskRegular>
                  <b>{i18n.accountType}</b>: {i18n.admin}
               </Typo18HKGroteskRegular>
            </ProfileDetails>
            <LogoutWrapper>
               <Logout handleClick={handleLogout} />
            </LogoutWrapper>
         </ProfileCardWrapper>
      )
   }
}
export { ProfileCard }
