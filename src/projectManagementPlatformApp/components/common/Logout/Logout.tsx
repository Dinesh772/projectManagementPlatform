import React from 'react'
import i18n from '../../../../i18n/strings.json'
import LogoutButton from '../../../../Common/components/CommonButton/CommonButton'
import { Colors } from '../../../../themes/Colors'

const Logout = props => (
   <LogoutButton
      buttonValue={i18n.logout}
      width={'80px'}
      handleClick={props.handleClick}
      bgColor={Colors.brightBlue}
      height={'30px'}
   />
)
export default Logout
