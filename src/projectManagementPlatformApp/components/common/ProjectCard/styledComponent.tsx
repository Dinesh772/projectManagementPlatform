import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
const EachProjectWrapper = styled.div<{ bgColor: any }>`
   display: flex;
   height: 50px;
   width: 100%;
   justify-content: space-around;
   align-items: center;
   border: 1px solid ${Colors.lightBlueGrey};
   background-color: ${props => props.bgColor};
   cursor: pointer;
`
export { EachProjectWrapper }
