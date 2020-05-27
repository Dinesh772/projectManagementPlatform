import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'
const Button = styled.button<{
   bgColor: string
   width: string
   height: string
}>`
   width: ${props => props.width ?? '320px'};
   height: ${props => props.height ?? '40px'};
   border-radius: 4px;
   background-color: ${props => props.bgColor ?? Colors.brightBlue};
   color: ${Colors.white};
   display: flex;
   justify-content: center;
`
export { Button }
