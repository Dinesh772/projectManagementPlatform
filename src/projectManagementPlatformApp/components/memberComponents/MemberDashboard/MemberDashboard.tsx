import React from 'react'
import { observer } from 'mobx-react'
import { History } from 'history'
import { withRouter } from 'react-router-dom'

import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import NoDataView from '../../../../Common/components/NoDataView'

import Projects from '../../common/Projects'
import Pagination from '../../common/Pagination'

import { MemberWrapper, MemberHeader } from './styledComponent'
@observer
class MemberDashboard extends React.Component<{
   taskStore: any
   projectStore: any
   history: History
}> {
   handleProjectCardTriggred = value => {
      const { history } = this.props
      history.push(
         `/project-management-platform/dashboard/project/tasks/${value}`
      )
   }
   handleDropdown = () => {
      const { projectStore } = this.props
      projectStore.getWorkflowsAPI()
   }

   render() {
      const { projectStore } = this.props
      return (
         <MemberWrapper>
            <MemberHeader>
               <Typo26BrightBlueHKGroteskRegular>
                  {i18n.listOfProjects}
               </Typo26BrightBlueHKGroteskRegular>
            </MemberHeader>
            {projectStore.totalProjectsCount !== 0 ? (
               <React.Fragment>
                  <Projects
                     projectStore={projectStore}
                     handleProjectClick={this.handleProjectCardTriggred}
                  />
                  <Pagination
                     hide={projectStore.totalPaginationLimit <= 1}
                     currentPageNumber={projectStore.currentPageNumber}
                     totalPages={projectStore.totalPaginationLimit}
                     handlePaginationButtons={
                        projectStore.handlePaginationButtons
                     }
                  />
               </React.Fragment>
            ) : (
               <NoDataView text={i18n.noProjectsFoundCreateNewOne} />
            )}
         </MemberWrapper>
      )
   }
}

export default withRouter(MemberDashboard)
