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
export { TaskCardWrapper, DropdownWrapper, DropdownWrapperParent, InfoWrapper }
