import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import { action } from 'mobx'
type propsType = {
   authStore: any
   history: History
}

@inject('authStore')
@observer
class ProjectManagementPlatform extends React.Component<propsType> {
   @action.bound
   handleLogout() {
      const { clearUserSession } = this.props.authStore
      const { history } = this.props
      clearUserSession()
      history.replace('/')
   }
   render() {
      return (
         <div>
            <p>ProjectManagementPlatform component</p>
            <button
               style={{
                  backgroundColor: 'red',
                  color: 'white',
                  fontWeight: 600,
                  padding: '4px',
                  margin: '20px'
               }}
               onClick={this.handleLogout}
            >
               {' '}
               logout
            </button>
         </div>
      )
   }
}
export default withRouter(ProjectManagementPlatform)
