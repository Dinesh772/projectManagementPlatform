import React from 'react'
import ProtectedRoute from '../../Authentication/routes/authenticationRoutes'
import ProjectManagementPlatform from '../components/common/ProjectManagementPlatformDashboard/index'
import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../Common/constants/RouteConstants'

const projectManagementPlatformRoutes = (
   <ProtectedRoute
      exact
      path={PROJECT_MANAGEMENT_PLATFORM_DASHBOARD}
      component={ProjectManagementPlatform}
   />
)
export default projectManagementPlatformRoutes
