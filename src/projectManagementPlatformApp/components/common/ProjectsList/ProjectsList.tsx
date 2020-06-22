import React from 'react'
import { observer } from 'mobx-react'

import { Typo16HKGroteskMedium } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import { Colors } from '../../../../themes/Colors'

import ProjectCard from '../ProjectCard'

import { ProjectsListWrapper, ProjectsListHeader } from './styledComponent'
import { ProjectModelType } from '../../../stores/ProjectStore/ProjectStore'
type ProjectsProps = {
   projectsData: Array<ProjectModelType>
   handleProjectClick: Function
}
@observer
class ProjectsList extends React.Component<ProjectsProps> {
   render() {
      const projectsData = this.props.projectsData
      const { handleProjectClick } = this.props
      const listOfProjects = projectsData.map((eachProject, index) => (
         <ProjectCard
            key={eachProject.id}
            project={eachProject}
            bgColor={index % 2 === 0 ? Colors.lightBlueGrey24 : Colors.white}
            handleProjectClick={handleProjectClick}
         />
      ))
      return (
         <ProjectsListWrapper>
            <ProjectsListHeader>
               <Typo16HKGroteskMedium>{i18n.projectName}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>{i18n.type}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>
                  {i18n.workflowType.slice(0, -1)}
               </Typo16HKGroteskMedium>

               <Typo16HKGroteskMedium>{i18n.createdAt}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>{i18n.createdBy}</Typo16HKGroteskMedium>
            </ProjectsListHeader>
            {listOfProjects}
         </ProjectsListWrapper>
      )
   }
}
export { ProjectsList }
