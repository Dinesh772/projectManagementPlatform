import React from 'react'
import { render } from '@testing-library/react'
import i18n from '../../i18n/strings.json'
import SignInButton from './CommonButton'
import SignInButtonFetchingLoader from './SignInButtonFetchingLoader'
describe('SignInButton component testing', () => {
   it('should check button should render', () => {
      const { getByText } = render(<SignInButton buttonValue={i18n.login} />)
      getByText(i18n.login)
   })
   it('should check loader on fetching ', () => {
      const { getByLabelText } = render(
         <SignInButton buttonValue={<SignInButtonFetchingLoader />} />
      )
      getByLabelText('audio-loading')
   })
})
