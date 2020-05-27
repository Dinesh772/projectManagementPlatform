import React from 'react'
import jsonData from '../../../fixtures/projectFixtures.json'
import EachProject from '../EachProject'
import { Typo18HKGroteskMedium } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import { ProjectsListWrapper, ProjectsListHeader } from './styledComponent'

class ProjectsList extends React.Component {
   render() {
      const data = jsonData.slice(0, 10)
      const listOfProjects = data.map(eachProject => (
         <EachProject key={eachProject.id} project={eachProject} />
      ))
      return (
         <ProjectsListWrapper>
            <ProjectsListHeader>
               <Typo18HKGroteskMedium>{i18n.projectName}</Typo18HKGroteskMedium>
               <Typo18HKGroteskMedium>{i18n.type}</Typo18HKGroteskMedium>
               <Typo18HKGroteskMedium>{i18n.createdAt}</Typo18HKGroteskMedium>
               <Typo18HKGroteskMedium>{i18n.createdBy}</Typo18HKGroteskMedium>
            </ProjectsListHeader>
            {listOfProjects}
         </ProjectsListWrapper>
      )
   }
}
export { ProjectsList }
