import React from 'react'
import ProjectsList from '../ProjectsList'
import { ProjectsWrapper, ChildWrapper } from './styledComponent'
import { observer } from 'mobx-react'

@observer
class Projects extends React.Component<{ projectStore: any }> {
   render() {
      const { projectStore } = this.props

      return (
         <ProjectsWrapper>
            <ChildWrapper>
               <ProjectsList projectsData={projectStore.renderProjectsList} />
            </ChildWrapper>
         </ProjectsWrapper>
      )
   }
}
export { Projects }
