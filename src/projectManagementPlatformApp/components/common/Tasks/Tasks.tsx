import React from 'react'
import { observable } from 'mobx'

import { inject, observer } from 'mobx-react'
import { History } from 'history'
import { withRouter } from 'react-router-dom'

import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import LoadingWrapperWithFailure from '../../../../common/components/LoadingWrapperWithFailure'
import { PROJECT_MANAGEMENT_PLATFORM_DASHBOARD } from '../../../../common/constants/RouteConstants'
import { Colors } from '../../../../themes/Colors'
import i18n from '../../../../i18n/strings.json'

import TasksList from '../TasksList'
import Pagination from '../Pagination'
import CreateTask from '../CreateTask'
import Header from '../Header'
import ProfileCard from '../ProfileCard'

import {
   TasksPageWrapper,
   PaginationWrapper,
   CreateTaskWrapper,
   ProjectTaskHeader,
   TasksWrapper,
   ProfileCardWrapper
} from './styledComponent'

type PropsType = {
   projectStore: any
   taskStore: any
   history: History
   authStore: any
}
@inject('projectStore', 'taskStore', 'authStore')
@observer
class Tasks extends React.Component<PropsType> {
   @observable isCreateClicked = false
   @observable isProfileClicked = false

   handleCreateTask = () => {
      this.isCreateClicked = !this.isCreateClicked
   }
   componentWillMount() {
      this.doNetworkCalls()
   }
   handleBackButton = () => {
      const { history } = this.props
      history.replace(PROJECT_MANAGEMENT_PLATFORM_DASHBOARD)
   }
   handleProfile = () => {
      this.isProfileClicked = !this.isProfileClicked
   }
   renderSuccessUI = observer(() => {
      const { projectStore, taskStore } = this.props
      return (
         <TasksPageWrapper>
            <ProjectTaskHeader>
               <CommonButton
                  buttonValue={i18n.backToProjects}
                  handleClick={this.handleBackButton}
                  bgColor={Colors.white}
                  textColor={Colors.steel}
                  height={'30px'}
                  width={'180px'}
               />
               <Typo26BrightBlueHKGroteskRegular>
                  {i18n.listOfTasks}
               </Typo26BrightBlueHKGroteskRegular>
               <CommonButton
                  buttonValue={i18n.addTask}
                  handleClick={this.handleCreateTask}
                  height={'30px'}
                  width={'120px'}
               />
            </ProjectTaskHeader>
            <TasksWrapper>
               <TasksList taskStore={taskStore} />
            </TasksWrapper>
            <PaginationWrapper backgroundColor={this.isCreateClicked}>
               <Pagination
                  hide={taskStore.totalPaginationLimit <= 1}
                  store={taskStore}
               />
            </PaginationWrapper>
            <CreateTaskWrapper hide={this.isCreateClicked}>
               <CreateTask
                  handleClose={this.handleCreateTask}
                  taskStore={taskStore}
                  projectsData={projectStore.projectsList}
               />
            </CreateTaskWrapper>
         </TasksPageWrapper>
      )
   })
   doNetworkCalls = () => {
      const { taskStore } = this.props
      taskStore.getTasksAPI()
   }
   handleLogout() {
      const { clearUserSession } = this.props.authStore
      const { history } = this.props
      clearUserSession()
      history.replace('/')
   }
   render() {
      const { taskStore } = this.props

      return (
         <div>
            <Header handleProfileClick={this.handleProfile} />
            <LoadingWrapperWithFailure
               apiStatus={taskStore.tasksAPIStatus}
               renderSuccessUI={this.renderSuccessUI}
               apiError={taskStore.tasksAPIError}
               onRetryClick={this.doNetworkCalls}
            />
            <ProfileCardWrapper hide={this.isProfileClicked}>
               <ProfileCard
                  handleProfile={this.handleProfile}
                  handleLogout={this.handleLogout}
               />
            </ProfileCardWrapper>
         </div>
      )
   }
}
export default withRouter(Tasks)
