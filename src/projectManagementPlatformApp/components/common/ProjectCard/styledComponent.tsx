import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

export const EachProjectWrapper = styled.div<{ bgColor: any }>`
   display: flex;
   height: 45px;
   width: 100%;
   justify-content: space-around;
   align-items: center;
   border: 1px solid ${Colors.lightBlueGrey};
   background-color: ${props => props.bgColor};
   cursor: pointer;
`
export const CreatedByWrapper = styled.div`
   display: flex;
   width: 300px;
   justify-content: center;
   align-items: center;
`
export const TextWrapper = styled.p`
   height: 24px;
   padding-left: 15px;
   font-family: 'HKGroteskRegular';
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.2;
   letter-spacing: normal;
   color: ${Colors.darkBlueGrey};
`
