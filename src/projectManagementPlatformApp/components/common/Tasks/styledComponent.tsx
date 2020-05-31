import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
const TasksPageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${Colors.whiteTwo};
`
const PaginationWrapper = styled.div<{ backgroundColor: boolean }>``
const ProjectTaskHeader = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding-left: 80px;
   padding-right: 80px;
   padding-top: 30px;
   padding-bottom: 30px;
`
const TasksWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 500px;
`
const CreateTaskWrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   justify-content: center;
   align-items: center;
   position: absolute;
   z-index: 20;
   top: 0;
   width: 100%;
   height: 100vh;
   background-color: ${props => (props.hide ? Colors.black60 : 'inherit')};
`
const ProfileCardWrapper = styled.div<{ hide: boolean }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   background-color: ${props =>
      !props.hide ? Colors.whiteTwo : Colors.black60};
   position: absolute;
   box-shadow: 0 4px 40px 0 rgba(23, 31, 70, 0.16);
   z-index: 20;
   top: 0;
   right: 0;
   width: ${props => (props.hide ? '100%' : '0px')};
   height: 100vh;
   transition: 0.8s all ease-in;
`
export {
   TasksPageWrapper,
   PaginationWrapper,
   CreateTaskWrapper,
   ProjectTaskHeader,
   TasksWrapper,
   ProfileCardWrapper
}
