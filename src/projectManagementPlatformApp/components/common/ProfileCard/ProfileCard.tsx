import React from 'react'

import i18n from '../../../../i18n/strings.json'
import Avatar from '../../../../Common/components/Avatar/Avatar'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import { getAdmin } from '../../../../Common/utils/StorageUtils'

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
      let account
      if (getAdmin() === 'true') {
         account = 'Admin'
      } else {
         account = 'User'
      }
      return (
         <ProfileCardWrapper>
            <Avatar
               path={i18n.closeButtonSrc}
               handleClick={handleProfile}
               height={'30px'}
               width={'30px'}
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
                  <b>{i18n.accountType}</b>: {account}
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
