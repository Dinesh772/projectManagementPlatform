import React from 'react'
import ProjectsList from '../ProjectsList'
import { ProjectsWrapper, ChildWrapper } from './styledComponent'
import { observer } from 'mobx-react'

@observer
class Projects extends React.Component<{
   projectStore: any
   handleProjectClick: any
}> {
   render() {
      const { projectStore, handleProjectClick } = this.props

      return (
         <ProjectsWrapper>
            <ChildWrapper>
               <ProjectsList
                  projectsData={projectStore.renderProjectsList}
                  handleProjectClick={handleProjectClick}
               />
            </ChildWrapper>
         </ProjectsWrapper>
      )
   }
}
export { Projects }