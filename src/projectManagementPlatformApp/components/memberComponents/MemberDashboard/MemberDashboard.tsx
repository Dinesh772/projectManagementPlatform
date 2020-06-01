import React from 'react'
import { observer } from 'mobx-react'
import { History } from 'history'
import { withRouter } from 'react-router-dom'

import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import { PROJECT_MANAGEMENT_PLATFORM_TASKS } from '../../../../common/constants/RouteConstants'

import Projects from '../../common/Projects'
import Pagination from '../../common/Pagination'

import { MemberWrapper, MemberHeader } from './styledComponent'
import NoDataView from '../../../../common/components/NoDataView'
@observer
class MemberDashboard extends React.Component<{
   taskStore: any
   projectStore: any
   history: History
}> {
   handleProjectCardTriggred = () => {
      const { history } = this.props
      history.replace(PROJECT_MANAGEMENT_PLATFORM_TASKS)
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
               <NoDataView text={i18n.noProjectsFound} />
            )}
         </MemberWrapper>
      )
   }
}

export default withRouter(MemberDashboard)
