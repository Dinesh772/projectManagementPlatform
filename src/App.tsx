import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import SignInRoute from './authentication/components/SignInRoute'
import { Provider } from 'mobx-react'
import stores from './projectManagementPlatform/stores/index'

const App = () => {
   return (
      <Provider {...stores}>
         <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
               <Route path='/'>
                  <SignInRoute authStore={stores.authStore} />
               </Route>
            </Switch>
         </HashRouter>
      </Provider>
   )
}

export default App
