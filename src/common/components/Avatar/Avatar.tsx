import React from 'react'
import { AvatarImage } from './styledComponent'
const Avatar = props => (
   <AvatarImage
      height={props.height}
      width={props.width}
      src={props.path}
      alt={props.altText}
   />
)
export default Avatar
