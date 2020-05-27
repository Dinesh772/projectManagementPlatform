import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import i18n from '../../i18n/strings.json'
import CommonButton from './CommonButton'

export default {
   component: CommonButton,
   title: 'components/CommonButton'
}
export const defaultCommonButtonButtonView = () => (
   <CommonButton buttonValue={i18n.login} />
)

export const knobs = () => (
   <CommonButton
      buttonValue={text('buttonValue', i18n.login)}
      handleClick={action('button clicked')}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
