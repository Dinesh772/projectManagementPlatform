import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import FailureView from './FailureView'

export default {
   component: FailureView,
   title: 'Common/FailureView'
}

export const defaultView = () => <FailureView />

export const withOnRetryAndErrorMessageProp = () => (
   <FailureView
      onRetryClick={action('retry clicked')}
      errorMessage={'Failed'}
   />
)

export const knobs = () => (
   <FailureView
      errorMessage={text('errorMessage', 'failed message')}
      onRetryClick={action('retry clicked')}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
