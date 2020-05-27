import React from 'react'
import { Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import ProjectManagementPlatform from '../../projectManagementPlatform/components/ProjectManagementPlatform/index'

const ProtectedRoute = inject('authStore')(
   observer(({ component: Component, path, authStore, ...others }) => {
      console.log(path, authStore.access_token)
      return (
         <Route
            render={props =>
               authStore.access_token === undefined ? (
                  <Component />
               ) : (
                  <Route
                     path='/project-management-platform/dashboard'
                     component={ProjectManagementPlatform}
                  />
               )
            }
         />
      )
   })
)

export default ProtectedRoute
