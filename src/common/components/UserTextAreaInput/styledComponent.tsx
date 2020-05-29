import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const TextareaWrapper = styled.textarea<{ width: any; hasError: boolean }>`
   border: 1px solid ${Colors.lightBlueGrey};
   width: ${props => props.width ?? '380px'};
   border: solid 1px
      ${props => (props.hasError ? Colors.neonRed : Colors.steel)};
   background-color: ${props =>
      props.hasError ? Colors.neonRed5 : Colors.white};
   :focus {
      outline: none;
   }
`
export { TextareaWrapper }
