import React, { lazy } from 'react'
import ProtectedRoute from '../../Authentication/routes/authenticationRoutes'
import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../Common/constants/EnvironmentConstants'
const ProjectManagementPlatform = lazy(() =>
   import('../components/common/ProjectManagementPlatformDashboard/index')
)

const projectManagementPlatformRoutes = (
   <ProtectedRoute
      exact
      path={PROJECT_MANAGEMENT_PLATFORM_DASHBOARD}
      component={ProjectManagementPlatform}
   />
)
export default projectManagementPlatformRoutes
