import React from 'react'
import i18n from '../../i18n/strings.json'
import { ImageEl } from './styledComponent'
const Logo = props => (
   <ImageEl
      src={props.src ?? i18n.logoSrc}
      alt={props.alt ?? props.i18n.logoAlt}
   />
)
export default Logo
