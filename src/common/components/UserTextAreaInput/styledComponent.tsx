import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const TextareaWrapper = styled.textarea<{ width: any }>`
   border: 1px solid ${Colors.lightBlueGrey};
   width: ${props => props.width ?? '350px'};
   border: 1px solid ${Colors.steel};
   :focus {
      outline: none;
   }
`
export { TextareaWrapper }
