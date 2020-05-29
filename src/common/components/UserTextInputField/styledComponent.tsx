import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'
const InputField = styled.input<{ hasError: boolean; width: any }>`
   width: ${props => props.width ?? '320px'};
   height: 40px;
   border-radius: 2px;
   border: solid 1px
      ${props => (props.hasError ? Colors.neonRed : Colors.steel)};
   background-color: ${props =>
      props.hasError ? Colors.neonRed5 : Colors.white};
   :focus {
      outline: none;
   }
`
const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
`

export { InputField, InputWrapper }
