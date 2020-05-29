import React from 'react'
import { observer } from 'mobx-react'
import Projects from '../../common/Projects'
import {
   AdminWrapper,
   AdminHeader,
   CreateProjectWrapper,
   ProjectsWrapper,
   PaginationWrapper,
   ProjectTaskHeader,
   TasksWrapper,
   CreateTaskWrapper
} from './styledComponent'
import Pagination from '../../common/Pagination'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import { observable } from 'mobx'
import CreateProject from '../CreateProject'
import { Colors } from '../../../../themes/Colors'
import TasksList from '../../common/TasksList'
import CreateTask from '../../common/CreateTask'
@observer
class AdminDashboard extends React.Component<{
   projectStore: any
   taskStore: any
}> {
   @observable isCreateClicked = false
   @observable isProjectCardClicked = false
   @observable isAddTaskClicked = false
   handleClick = () => {
      this.isCreateClicked = !this.isCreateClicked
   }
   handleCreateTask = () => {
      this.isAddTaskClicked = !this.isAddTaskClicked
   }
   handleDropdown = () => {
      const { projectStore } = this.props
      projectStore.getWorkflowsAPI()
   }
   handleAddTask = () => {
      this.isAddTaskClicked = !this.isAddTaskClicked
   }
   handleProjectCardTriggred = () => {
      this.isProjectCardClicked = !this.isProjectCardClicked
   }
   render() {
      const { projectStore, taskStore } = this.props
      const { createProjectAPIStatus, createProjectAPI } = projectStore
      if (!this.isProjectCardClicked) {
         return (
            <AdminWrapper>
               <AdminHeader backgroundColor={this.isCreateClicked}>
                  <Typo26BrightBlueHKGroteskRegular>
                     {i18n.listOfProjects}
                  </Typo26BrightBlueHKGroteskRegular>
                  <CommonButton
                     buttonValue={i18n.create}
                     handleClick={this.handleClick}
                     height={'30px'}
                     width={'80px'}
                  />
               </AdminHeader>
               <ProjectsWrapper backgroundColor={this.isCreateClicked}>
                  <Projects
                     projectStore={projectStore}
                     handleProjectClick={this.handleProjectCardTriggred}
                  />
               </ProjectsWrapper>
               <PaginationWrapper backgroundColor={this.isCreateClicked}>
                  <Pagination
                     hide={projectStore.totalPaginationLimit <= 1}
                     store={projectStore}
                  />
               </PaginationWrapper>
               <CreateProjectWrapper hide={this.isCreateClicked}>
                  <CreateProject
                     handleClick={this.handleClick}
                     workflows={projectStore.workflows}
                     handleDropdown={this.handleDropdown}
                     fetchingStatus={createProjectAPIStatus}
                     createProject={createProjectAPI}
                  />
               </CreateProjectWrapper>
            </AdminWrapper>
         )
      } else {
         return (
            <AdminWrapper>
               <ProjectTaskHeader>
                  <CommonButton
                     buttonValue={i18n.backToProjects}
                     handleClick={this.handleProjectCardTriggred}
                     bgColor={Colors.whiteTwo}
                     textColor={Colors.steel}
                     height={'30px'}
                     width={'250px'}
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
               <CreateTaskWrapper hide={this.isAddTaskClicked}>
                  <CreateTask
                     handleClose={this.handleCreateTask}
                     taskStore={taskStore}
                     projectsData={projectStore.projectsList}
                  />
               </CreateTaskWrapper>
            </AdminWrapper>
         )
      }
   }
}

export { AdminDashboard }
