import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

const TaskCardWrapper = styled.div<{ bgColor: any }>`
   display: flex;
   height: 45px;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   border: 1px solid ${Colors.lightBlueGrey};
   background-color: ${props => props.bgColor};
   cursor: pointer;
`
const DropdownWrapper = styled.div`
   width: 200px;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
const DropdownWrapperParent = styled.div`
   width: 300px;
   height: 100%;
   display: flex;
   justify-content: center;
`
const InfoWrapper = styled.div`
   width: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-left: 30px;
`
export const Loadingwrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   margin-left: 50px;
   position: absolute;
   z-index: 20;
   margin-left: 40px;
`
export const ToastMessage = styled.div`
   display: flex;
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

export { TaskCardWrapper, DropdownWrapper, DropdownWrapperParent, InfoWrapper }
