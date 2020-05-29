import React from 'react'
import { observer } from 'mobx-react'
import Projects from '../../common/Projects'
import { MemberWrapper, MemberHeader } from './styledComponent'
import Pagination from '../../common/Pagination'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import { observable } from 'mobx'
@observer
class MemberDashboard extends React.Component<{ projectStore: any }> {
   @observable isProjectCardClicked = false

   handleProjectCardTriggred = () => {
      this.isProjectCardClicked = !this.isProjectCardClicked
   }
   handleCreateTask = () => {
      alert(1)
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
            <Projects
               projectStore={projectStore}
               handleProjectClick={this.handleProjectCardTriggred}
            />
            <Pagination
               hide={projectStore.totalPaginationLimit <= 1}
               store={projectStore}
            />
         </MemberWrapper>
      )
   }
}

export { MemberDashboard }
