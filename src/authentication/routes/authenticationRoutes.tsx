import React from 'react'
import { Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import ProjectManagementPlatform from '../../ProjectManagementPlatformApp/components/common/ProjectManagementPlatformDashboard/index'
import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../Common/constants/EnvironmentConstants'

const ProtectedRoute = inject('authStore')(
   observer(({ component: Component, path, authStore, ...others }) => {
      return (
         <Route
            render={props =>
               authStore.accessToken ? (
                  <Component />
               ) : (
                  <Route
                     path={PROJECT_MANAGEMENT_PLATFORM_DASHBOARD}
                     component={ProjectManagementPlatform}
                  />
               )
            }
         />
      )
   })
)

export default ProtectedRoute
