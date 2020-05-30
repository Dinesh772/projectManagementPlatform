import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import SignInRoute from './authentication/components/SignInRoute'
import { Provider } from 'mobx-react'
import stores from './projectManagementPlatformApp/stores/index'
import projectManagementPlatformRoutes from './projectManagementPlatformApp/routes/projectManagementPlatformRoutes'
import { PROJECT_MANAGEMENT_PLATFORM_TASKS } from './common/constants/RouteConstants'
import Tasks from './projectManagementPlatformApp/components/common/Tasks'

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
