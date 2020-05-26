import React from 'react'
import { render } from '@testing-library/react'

import i18n from '../../i18n/strings.json'
import UserTextInputField from './UserTextInputField'
describe('userTextInputField component tests', () => {
   it('should check component should render with lable text', () => {
      const { getByText } = render(
         <UserTextInputField labelText={i18n.usernameLabel} />
      )
      getByText(i18n.usernameLabel)
   })
   it('should check errorMessage field on error triggred', () => {
      const { getByText } = render(
         <UserTextInputField
            labelText={i18n.usernameLabel}
            errorMessage={i18n.invalidUsernameErrorText}
         />
      )
      getByText(i18n.invalidUsernameErrorText)
   })
})
