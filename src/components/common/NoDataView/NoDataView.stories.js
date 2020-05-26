import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import i18n from '../../../i18n/strings.json'
import '../../../styles/tailwind.css'
import NoDataView from './index'

export default {
   component: NoDataView,
   title: 'Common/NoDataView'
}

export const defaultView = () => <NoDataView />

export const knobs = () => (
   <NoDataView
   text={text('text',i18n.noDataText)}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
