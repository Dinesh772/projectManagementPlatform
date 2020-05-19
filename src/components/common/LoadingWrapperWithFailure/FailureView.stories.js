import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import FailureView from './FailureView'

export default {
   component: FailureView,
   title: 'FailureView'
}

export const defaultFailureView = () => <FailureView />

export const failureViewWithOnRetry = () => (
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
