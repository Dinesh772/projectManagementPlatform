import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import { action } from 'mobx'
import Logout from '../Logout/Logout'
import Header from '../Header'
import Projects from '../Projects'
import {
   ProjectManagementDashboardWrapper,
   ProjectsWrapper
} from './styledComponent'
import LoadingWrapperWithFailure from '../../../../common/components/LoadingWrapperWithFailure'
import MemberDashboard from '../../memberComponents/MemberDashboard'
import AdminDashboard from '../../adminComponents/AdminDashboard'
type propsType = {
   authStore: any
   history: History
   projectStore: any
}

@inject('authStore', 'projectStore')
@observer
class ProjectManagementPlatformDashboard extends React.Component<propsType> {
   @action.bound
   handleLogout() {
      const { clearUserSession } = this.props.authStore
      const { history } = this.props
      clearUserSession()
      history.replace('/')
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   componentWillUnmount() {
      const { projectStore } = this.props
      projectStore.clearStore()
   }
   @action.bound
   doNetworkCalls() {
      const { projectStore } = this.props
      projectStore.getProjectsAPI()
   }
   @action.bound
   renderSuccessUI() {
      const { projectStore } = this.props
      return projectStore.isAdmin ? (
         <AdminDashboard projectStore={projectStore} />
      ) : (
         <MemberDashboard projectStore={projectStore} />
      )
   }
   render() {
      const { projectsAPIStatus, projectsAPIError } = this.props.projectStore
      return (
         <ProjectManagementDashboardWrapper>
            <Header />
            <LoadingWrapperWithFailure
               apiStatus={projectsAPIStatus}
               apiError={projectsAPIError}
               onRetryClick={this.doNetworkCalls}
               renderSuccessUI={this.renderSuccessUI}
            />
            <Logout handleClick={this.handleLogout} />
         </ProjectManagementDashboardWrapper>
      )
   }
}
export default withRouter(ProjectManagementPlatformDashboard)
