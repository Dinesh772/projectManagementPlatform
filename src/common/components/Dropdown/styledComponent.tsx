import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const DropDownWrapper = styled.select<{ width: any }>`
   border: 0.6px solid lightgray;
   padding: 3px;
   border-radius: 4px;
   cursor: pointer;
   width: ${props => props.width ?? '100%'};
   :hover {
      outline: none;
   }
   :active {
      outline: none;
   }
`
const OptionElement = styled.option`
   height: 24px;
   font-size: 14px;
   font-weight: normal;
   cursor: pointer;
   font-stretch: normal;
   color: ${Colors.steel};
   :hover {
      background-color: #fff;
      outline: none;
   }

   :active {
      background-color: #fff;
      outline: none;
   }
   :focus {
      background-color: #fff;
      outline: none;
   }
   :checked {
      background-color: #fff;
      outline: none;
   }
`
export const ErrorMessageWrapper = styled.div`
   height: 16px;
`
export { DropDownWrapper, OptionElement }
