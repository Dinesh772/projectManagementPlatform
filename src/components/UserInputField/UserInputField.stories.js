import React from 'react'
import { withKnobs ,text} from '@storybook/addon-knobs'
import i18n from '../../i18n/strings.json'
import UserInputField from './UserInputField'


export default {
   component: UserInputField,
   title: 'components/common/UserInputField'
}
export const defaultUserInputFieldView = () => (<UserInputField
 labelText={i18n.usernameLabel} 

/>)

export const knobs = () => (
   <UserInputField
   labelText={text('labelText',i18n.usernameLabel)}
   value={text('value',i18n.mockUsername)}
   errorMessage={text('errorMessage',i18n.mockErrorText)}

   />
)



knobs.story = {
   decorators: [withKnobs]
}

