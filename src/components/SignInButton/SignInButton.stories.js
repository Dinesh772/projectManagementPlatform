import React from 'react'
 import { action } from '@storybook/addon-actions'
 import { withKnobs ,text} from '@storybook/addon-knobs'

//import '../../../styles/tailwind'
import i18n from '../../i18n/strings.json'
import SignInButton from './SignInButton'
import SignInButtonFetchingView from './SignInButtonFetchingLoader'


export default {
   component: SignInButton,
   title: 'components/common/SignInButton'
}
export const defaultSignInButtonView = () => <SignInButton buttonValue={i18n.login} />

const fetchingView=<SignInButtonFetchingView />
export const FetchingView = () => (
   <SignInButton
    buttonValue={fetchingView}
    handleClick={action('button clicked')}
   />
)
export const knobs = () => (
   <SignInButton
      buttonValue={text('buttonValue', i18n.login)}
      handleClick={action('button clicked')}
      
   />
)



knobs.story = {
   decorators: [withKnobs]
}

