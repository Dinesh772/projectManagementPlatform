import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import { action, observable } from 'mobx'
import Header from '../Header'
import {
   ProjectManagementDashboardWrapper,
   ProfileCardWrapper
} from './styledComponent'
import LoadingWrapperWithFailure from '../../../../common/components/LoadingWrapperWithFailure'
import MemberDashboard from '../../memberComponents/MemberDashboard'
import AdminDashboard from '../../adminComponents/AdminDashboard'
import ProfileCard from '../ProfileCard'
type propsType = {
   authStore: any
   history: History
   projectStore: any
}

@inject('authStore', 'projectStore')
@observer
class ProjectManagementPlatformDashboard extends React.Component<propsType> {
   @observable isProfileClicked = false
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
   handleProfile = (event, value) => {
      this.isProfileClicked = !this.isProfileClicked
   }
   render() {
      const { projectsAPIStatus, projectsAPIError } = this.props.projectStore
      return (
         <ProjectManagementDashboardWrapper>
            <Header handleProfileClick={this.handleProfile} />
            <LoadingWrapperWithFailure
               apiStatus={projectsAPIStatus}
               apiError={projectsAPIError}
               onRetryClick={this.doNetworkCalls}
               renderSuccessUI={this.renderSuccessUI}
            />
            <ProfileCardWrapper hide={this.isProfileClicked}>
               <ProfileCard
                  handleProfile={this.handleProfile}
                  handleLogout={this.handleLogout}
               />
            </ProfileCardWrapper>
         </ProjectManagementDashboardWrapper>
      )
   }
}
export default withRouter(ProjectManagementPlatformDashboard)
