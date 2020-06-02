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
   ProfileCardWrapper,
   TaskInfoWrapper,
   TransitionConfirmationWrapper
} from './styledComponent'
import TaskInfo from '../TaskInfo'
import TransitionChange from '../TransitionChange'

type PropsType = {
   projectStore: any
   taskStore: any
   history: History
   authStore: any
   match: any
}
@inject('projectStore', 'taskStore', 'authStore')
@observer
class Tasks extends React.Component<PropsType> {
   @observable isCreateClicked = false
   @observable isProfileClicked = false
   @observable isTaskInfoClicked = false
   @observable taskObject = {}
   @observable isStatusChangeTriggred = false

   handleCreateTask = () => {
      this.isCreateClicked = !this.isCreateClicked
      if (!this.isCreateClicked) {
         let id = this.props.match.params.id
         this.doNetworkCalls(id)
      }
   }
   handleStatusChange = (selectedOption, task) => {
      this.isStatusChangeTriggred = !this.isStatusChangeTriggred
      if (this.isStatusChangeTriggred) {
         let taskObject = this.taskObject
         taskObject = task
         taskObject['to'] = selectedOption
         this.taskObject = taskObject
      }
   }
   componentDidMount() {
      let id = this.props.match.params.id
      this.doNetworkCalls(id)
   }
   handleBackButton = () => {
      const { history } = this.props
      history.replace(PROJECT_MANAGEMENT_PLATFORM_DASHBOARD)
   }
   handleProfile = () => {
      this.isProfileClicked = !this.isProfileClicked
   }
   componentWillUnmount() {
      const { taskStore } = this.props
      taskStore.clearStore()
   }
   handleTaskInfo = (event, task) => {
      this.isTaskInfoClicked = !this.isTaskInfoClicked
      if (this.isTaskInfoClicked) {
         this.taskObject = task
      }
   }

   renderSuccessUI = observer(() => {
      const { projectStore, taskStore } = this.props
      const tasksData = taskStore.renderedTasksList

      return (
         <TasksPageWrapper>
            <ProjectTaskHeader>
               <CommonButton
                  buttonValue={i18n.backToProjects}
                  handleClick={this.handleBackButton}
                  bgColor={Colors.whiteTwo}
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
               <TasksList
                  tasksData={tasksData}
                  handleTaskInfo={this.handleTaskInfo}
                  handleStatusChange={this.handleStatusChange}
               />
            </TasksWrapper>
            <PaginationWrapper backgroundColor={this.isCreateClicked}>
               <Pagination
                  hide={taskStore.totalPaginationLimit <= 1}
                  currentPageNumber={taskStore.currentPageNumber}
                  totalPages={taskStore.totalPaginationLimit}
                  handlePaginationButtons={taskStore.handlePaginationButtons}
               />
            </PaginationWrapper>
            <CreateTaskWrapper hide={this.isCreateClicked}>
               <CreateTask
                  handleClose={this.handleCreateTask}
                  taskStore={taskStore}
                  projectsData={projectStore.projectsList}
               />
            </CreateTaskWrapper>
            <TaskInfoWrapper hide={this.isTaskInfoClicked}>
               <TaskInfo
                  handleClose={this.handleTaskInfo}
                  taskObject={this.taskObject}
               />
            </TaskInfoWrapper>
            <TransitionConfirmationWrapper hide={this.isStatusChangeTriggred}>
               <TransitionChange
                  taskObject={this.taskObject}
                  handleClose={this.handleStatusChange}
               />
            </TransitionConfirmationWrapper>
         </TasksPageWrapper>
      )
   })

   doNetworkCalls = id => {
      const { taskStore, projectStore } = this.props
      taskStore.getTasksAPI()
      projectStore.getProjectsAPI()
   }
   handleLogout = () => {
      const { history } = this.props
      history.replace('/')
   }
   onRetryDoNetworkCalls = () => {
      let id = this.props.match.params.id
      this.doNetworkCalls(id)
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
               onRetryClick={this.onRetryDoNetworkCalls}
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
