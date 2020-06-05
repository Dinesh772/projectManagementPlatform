import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
export const TasksPageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${Colors.whiteTwo};
`
export const PaginationWrapper = styled.div<{ backgroundColor: boolean }>``
export const ProjectTaskHeader = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding-left: 80px;
   padding-right: 80px;
   padding-top: 30px;
   padding-bottom: 30px;
`
export const TasksWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 500px;
`
export const CreateTaskWrapper = styled.div<{ hide: any }>`
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
export const TransitionConfirmationWrapper = styled.div<{ hide: any }>`
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
export const TaskInfoWrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   justify-content: center;
   align-items: center;
   position: absolute;
   z-index: 20;
   top: 0;
   width: 100%;
   height: 100vh;
   background-color: ${Colors.black60};
`
export const ProfileCardWrapper = styled.div<{ hide: boolean }>`
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

export const ToasterWrapper = styled.div`
   position: fixed;
   z-index: 10;
   bottom: 0;
   left: 50%;
`
export const ToastMessage = styled.div`
   display: flex;
`
