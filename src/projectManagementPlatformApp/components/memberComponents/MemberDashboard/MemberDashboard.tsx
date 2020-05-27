import React from 'react'
import { observer } from 'mobx-react'
import Projects from '../../common/Projects'
import { ProjectsWrapper } from './styledComponent'
@observer
class MemberDashboard extends React.Component<{ projectStore: any }> {
   render() {
      const { projectStore } = this.props
      return (
         <ProjectsWrapper>
            <Projects projectStore={projectStore} />
         </ProjectsWrapper>
      )
   }
}

export { MemberDashboard }
