import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'
const Button = styled.button<{
   bgColor: string
   width: string
   height: string
   borderColor: any
   textColor: any
}>`
   width: ${props => props.width ?? '320px'};
   height: ${props => props.height ?? '40px'};
   border-radius: 4px;
   background-color: ${props => props.bgColor ?? Colors.brightBlue};
   color: ${props => props.textColor ?? Colors.white};
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 5px;
   margin-right: 5px;
   border: 1px solid ${props => props.borderColor ?? props.bgColor};
   :focus {
      outline: none;
   }
`
export { Button }
