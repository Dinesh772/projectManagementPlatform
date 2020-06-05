import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
export const ProjectManagementDashboardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   background-color: ${Colors.whiteTwo};
   min-height: 100vh;
   width: 100%;
`
export const ProjectsWrapper = styled.div`
   min-height: 80vh;
   width: 100%;
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
