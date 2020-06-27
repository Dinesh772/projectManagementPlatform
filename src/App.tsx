import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import SignInRoute from './Authentication/components/SignInRoute'
import { Provider } from 'mobx-react'
import stores from './ProjectManagementPlatformApp/stores/index'
import projectManagementPlatformRoutes from './ProjectManagementPlatformApp/routes/projectManagementPlatformRoutes'
import { PROJECT_MANAGEMENT_PLATFORM_TASKS } from './Common/constants/EnvironmentConstants'
import Tasks from './ProjectManagementPlatformApp/components/common/Tasks'

class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
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
         </Provider>
      )
   }
}

export default App
