import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import SignInRoute from './authentication/components/SignInRoute'
import { Provider } from 'mobx-react'
import stores from './projectManagementPlatformApp/stores/index'
import projectManagementPlatformRoutes from './projectManagementPlatformApp/routes/projectManagementPlatformRoutes'

class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <HashRouter basename={process.env.PUBLIC_URL}>
               <Switch>
                  {projectManagementPlatformRoutes}
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
