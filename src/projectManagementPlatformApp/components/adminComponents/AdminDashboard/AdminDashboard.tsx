import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { History } from 'history'
import { withRouter } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'

import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../Common/components/CommonButton/CommonButton'

import i18n from '../../../../i18n/strings.json'

import Pagination from '../../common/Pagination'
import Projects from '../../common/Projects'

import CreateProject from '../CreateProject'

import {
   AdminWrapper,
   AdminHeader,
   CreateProjectWrapper,
   ProjectsWrapper,
   PaginationWrapper,
   ToasterWrapper
} from './styledComponent'
import NoDataView from '../../../../Common/components/NoDataView'
@observer
class AdminDashboard extends React.Component<{
   projectStore: any
   taskStore: any
   authStore: any
   history: History
}> {
   @observable isCreateClicked = false
   @observable isProjectCardClicked = false
   handleClick = () => {
      const { projectStore } = this.props
      this.isCreateClicked = !this.isCreateClicked
      if (this.isCreateClicked) {
         projectStore.getWorkflowsAPI()
      }
   }
   handleDropdown = () => {
      const { projectStore } = this.props
      projectStore.getWorkflowsAPI()
   }

   handleProjectCardTriggred = value => {
      const { history, taskStore } = this.props

      taskStore.getTasksAPI(value)
      history.push(
         `/project-management-platform/dashboard/project/tasks/${value}`
      )
   }

   render() {
      const { projectStore } = this.props
      const {
         createProjectAPIStatus,
         createProjectAPI,
         workflowsAPIStatus
      } = projectStore
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
            {projectStore.totalProjectsCount !== 0 ? (
               <React.Fragment>
                  <ProjectsWrapper backgroundColor={this.isCreateClicked}>
                     <Projects
                        projectStore={projectStore}
                        handleProjectClick={this.handleProjectCardTriggred}
                     />
                  </ProjectsWrapper>
                  <PaginationWrapper backgroundColor={this.isCreateClicked}>
                     <Pagination
                        hide={projectStore.totalPaginationLimit <= 1}
                        currentPageNumber={projectStore.currentPageNumber}
                        totalPages={projectStore.totalPaginationLimit}
                        handlePaginationButtons={
                           projectStore.handlePaginationButtons
                        }
                     />
                  </PaginationWrapper>
               </React.Fragment>
            ) : (
               <NoDataView text={i18n.noProjectsFoundCreateNewOne} />
            )}
            <CreateProjectWrapper hide={this.isCreateClicked}>
               <CreateProject
                  handleClick={this.handleClick}
                  workflows={projectStore.workflows}
                  handleDropdown={this.handleDropdown}
                  workflowFetchingStatus={workflowsAPIStatus}
                  createProjectFetchingStataus={createProjectAPIStatus}
                  createProject={createProjectAPI}
               />
            </CreateProjectWrapper>
            <ToasterWrapper>
               <ToastContainer transition={Slide} autoClose={3000} limit={1} />
            </ToasterWrapper>
         </AdminWrapper>
      )
   }
}

export default withRouter(AdminDashboard)
