import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import { action, observable } from 'mobx'
import CookieConsent from 'react-cookie-consent'

import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import i18n from '../../../../i18n/strings.json'
import MemberDashboard from '../../memberComponents/MemberDashboard'
import AdminDashboard from '../../adminComponents/AdminDashboard'

import Header from '../Header'
import ProfileCard from '../ProfileCard'

import {
   ProjectManagementDashboardWrapper,
   ProfileCardWrapper
} from './styledComponent'

type propsType = {
   authStore: any
   history: History
   projectStore: any
   taskStore: any
}

@inject('authStore', 'projectStore', 'taskStore')
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
      const { projectStore, taskStore, authStore } = this.props

      return authStore.isAdmin === 'true' ? (
         <AdminDashboard
            projectStore={projectStore}
            taskStore={taskStore}
            authStore={authStore}
         />
      ) : (
         <MemberDashboard projectStore={projectStore} taskStore={taskStore} />
      )
   }
   handleProfile = event => {
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
            <CookieConsent
               location='bottom'
               buttonText='I understand'
               cookieName={i18n.projectTitle}
               style={{ background: '#2B373B' }}
               buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
               expires={150}
            >
               We use cookies to improve your website experience, and for
               analytical and advertising purposes as described in our
               <a href={i18n.cookieConsentUrl}>
                  <u>Cookie Policy</u>
               </a>
               {'  '}. By continuing to use our website, you accept our use of
               cookies. For more information, please refer to our Privacy
               Policy.
            </CookieConsent>
         </ProjectManagementDashboardWrapper>
      )
   }
}
export default withRouter(ProjectManagementPlatformDashboard)
