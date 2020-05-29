import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

const AdminWrapper = styled.div`
   min-height: 80vh;
   width: 100%;
`
const AdminHeader = styled.div<{ backgroundColor: boolean }>`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding-left: 80px;
   padding-right: 80px;
   padding-top: 30px;
   padding-bottom: 30px;
`
const CreateProjectWrapper = styled.div<{ hide: any }>`
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
const ProjectsWrapper = styled.div<{ backgroundColor: boolean }>``
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
export {
   AdminWrapper,
   AdminHeader,
   CreateProjectWrapper,
   ProjectsWrapper,
   PaginationWrapper,
   ProjectTaskHeader,
   TasksWrapper,
   CreateTaskWrapper
}
