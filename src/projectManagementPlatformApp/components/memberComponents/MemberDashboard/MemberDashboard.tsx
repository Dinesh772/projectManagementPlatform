import React from 'react'
import { observer } from 'mobx-react'
import Projects from '../../common/Projects'
import { MemberWrapper, MemberHeader } from './styledComponent'
import Pagination from '../../common/Pagination'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
@observer
class MemberDashboard extends React.Component<{ projectStore: any }> {
   render() {
      const { projectStore } = this.props
      return (
         <MemberWrapper>
            <MemberHeader>
               <Typo26BrightBlueHKGroteskRegular>
                  {i18n.listOfProjects}
               </Typo26BrightBlueHKGroteskRegular>
            </MemberHeader>
            <Projects projectStore={projectStore} />
            <Pagination
               hide={projectStore.totalPaginationLimit <= 1}
               projectStore={projectStore}
            />
         </MemberWrapper>
      )
   }
}

export { MemberDashboard }
