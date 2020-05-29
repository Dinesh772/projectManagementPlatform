import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const DropDownWrapper = styled.select<{ width: any }>`
   border: 0.6px solid lightgray;
   padding: 3px;
   border-radius: 4px;
   width: ${props => props.width ?? '100%'};
   :hover {
      border: 1px solid ${Colors.darkBlueGrey};
   }
   :active {
      border: 1px solid ${Colors.darkBlueGrey};
   }
`
const OptionElement = styled.option`
   height: 24px;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   color: ${Colors.steel};
   :hover {
      outline-color: yellow;
      border: 1px solid ${Colors.darkBlueGrey};
   }
   :active {
      outline-color: yellow;
      border: 1px solid ${Colors.darkBlueGrey};
   }
   :checked {
      background: linear-gradient(#d6d6d6, #d6d6d6);
      background-color: #d6d6d6 !important;
      color: #000000 !important;
   }
`
export const ErrorMessageWrapper = styled.div`
   height: 16px;
`
export { DropDownWrapper, OptionElement }
