import React from 'react'
import { render } from '@testing-library/react'
import i18n from '../../../i18n/strings.json'
import CommonButton from './CommonButton'
describe('SignInButton component testing', () => {
   it('should check button should render', () => {
      const { getByText } = render(<CommonButton buttonValue={i18n.login} />)
      getByText(i18n.login)
   })
})
