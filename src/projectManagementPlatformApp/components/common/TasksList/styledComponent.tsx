import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
const TasksListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 90%;
   height: 100%;
   background-color: ${Colors.white};
   border: 1px solid ${Colors.lightBlueGrey};
   border-radius: 6px;
`
const TasksListHeader = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 60px;
`
export { TasksListWrapper, TasksListHeader }
