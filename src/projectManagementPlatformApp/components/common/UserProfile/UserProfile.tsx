import React from 'react'

import Avatar from '../../../../common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import { Typo16HKGroteskMedium } from '../../../../styleGuide/Typos'

import { UserProfileWrapper } from './styledComponent'
class UserProfile extends React.Component {
   render() {
      return (
         <UserProfileWrapper>
            <Avatar path={i18n.avatarImageSrc} altText={i18n.logoAlt} />
            <Typo16HKGroteskMedium>{i18n.profile}</Typo16HKGroteskMedium>
         </UserProfileWrapper>
      )
   }
}
export { UserProfile }
