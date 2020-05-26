import React from 'react'
import { render } from '@testing-library/react'
import CommonFetchingButton from './CommonFetchingButton'
describe('SignInButton component testing', () => {
   it('should check loader on fetching ', () => {
      const { getByLabelText } = render(<CommonFetchingButton />)
      getByLabelText('audio-loading')
   })
})
