import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

const TaskCardWrapper = styled.div<{ bgColor: any }>`
   display: flex;
   height: 45px;
   width: 100%;
   justify-content: space-around;
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
`
const InfoWrapper = styled.div`
   width: 50px;
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
export { TaskCardWrapper, DropdownWrapper, DropdownWrapperParent, InfoWrapper }
