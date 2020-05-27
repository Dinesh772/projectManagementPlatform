import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
const ProjectManagementDashboardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   background-color: ${Colors.whiteTwo};
   min-height: 100vh;
   width: 100%;
`
const ProjectsWrapper = styled.div`
   min-height: 80vh;
   width: 100%;
`
export { ProjectManagementDashboardWrapper, ProjectsWrapper }
