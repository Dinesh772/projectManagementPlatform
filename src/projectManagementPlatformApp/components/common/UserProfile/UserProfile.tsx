import React from 'react'
import { UserProfileWrapper } from './styledComponent'
import Avatar from '../../../../common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import { Typo18HKGroteskMedium } from '../../../../styleGuide/Typos'
class UserProfile extends React.Component {
   render() {
      return (
         <UserProfileWrapper>
            <Avatar path={i18n.avatarImageSrc} altText={i18n.logoAlt} />
            <Typo18HKGroteskMedium>{i18n.profile}</Typo18HKGroteskMedium>
         </UserProfileWrapper>
      )
   }
}
export { UserProfile }
