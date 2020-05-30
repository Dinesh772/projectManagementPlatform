import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { History } from 'history'
import { withRouter } from 'react-router-dom'

import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import { PROJECT_MANAGEMENT_PLATFORM_TASKS } from '../../../../common/constants/RouteConstants'

import i18n from '../../../../i18n/strings.json'

import Pagination from '../../common/Pagination'
import Projects from '../../common/Projects'

import CreateProject from '../CreateProject'

import {
   AdminWrapper,
   AdminHeader,
   CreateProjectWrapper,
   ProjectsWrapper,
   PaginationWrapper
} from './styledComponent'
@observer
class AdminDashboard extends React.Component<{
   projectStore: any
   taskStore: any
   history: History
}> {
   @observable isCreateClicked = false
   @observable isProjectCardClicked = false
   handleClick = () => {
      this.isCreateClicked = !this.isCreateClicked
   }
   handleDropdown = () => {
      const { projectStore } = this.props
      projectStore.getWorkflowsAPI()
   }

   handleProjectCardTriggred = () => {
      const { history } = this.props
      history.replace(PROJECT_MANAGEMENT_PLATFORM_TASKS)
   }

   render() {
      const { projectStore } = this.props
      const { createProjectAPIStatus, createProjectAPI } = projectStore
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
   }
}

export default withRouter(AdminDashboard)
