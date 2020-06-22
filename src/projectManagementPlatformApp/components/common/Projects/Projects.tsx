import React from 'react'

import { observer } from 'mobx-react'

import ProjectsList from '../ProjectsList'

import { ProjectsWrapper, ChildWrapper } from './styledComponent'
import ProjectStore from '../../../stores/ProjectStore'

type ProjectsProps = {
   projectStore: ProjectStore
   handleProjectClick: Function
}
@observer
class Projects extends React.Component<ProjectsProps> {
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
