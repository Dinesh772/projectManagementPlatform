import React, { Suspense, lazy } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import { Provider } from 'mobx-react'
import stores from './ProjectManagementPlatformApp/stores/index'
import { PROJECT_MANAGEMENT_PLATFORM_TASKS } from './Common/constants/EnvironmentConstants'

const SignInRoute = lazy(() =>
   import('./Authentication/components/SignInRoute')
)
import projectManagementPlatformRoutes from './ProjectManagementPlatformApp/routes/projectManagementPlatformRoutes'
import LoadingView from './Common/components/LoadingWrapperWithFailure/LoadingView'
const Tasks = lazy(() =>
   import('./ProjectManagementPlatformApp/components/common/Tasks')
)

class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <Suspense fallback={<LoadingView />}>
               <HashRouter basename={process.env.PUBLIC_URL}>
                  <Switch>
                     {projectManagementPlatformRoutes}
                     <Route path={PROJECT_MANAGEMENT_PLATFORM_TASKS}>
                        <Tasks />
                     </Route>
                     <Route path='/'>
                        <SignInRoute />
                     </Route>
                  </Switch>
               </HashRouter>
            </Suspense>
         </Provider>
      )
   }
}

export default App
