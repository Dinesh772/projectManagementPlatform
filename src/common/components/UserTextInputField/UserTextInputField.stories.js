import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import i18n from '../../i18n/strings.json'
import UserTextInputField from './UserTextInputField'

export default {
   component: UserTextInputField,
   title: 'components/UserTextInputField'
}
export const defaultUserInputFieldView = () => (
   <UserTextInputField labelText={i18n.usernameLabel} />
)

export const knobs = () => (
   <UserTextInputField
      labelText={text('labelText', i18n.usernameLabel)}
      value={text('value', i18n.mockUsername)}
      errorMessage={text('errorMessage', i18n.mockErrorText)}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
