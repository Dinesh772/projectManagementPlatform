import React from 'react'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import ProjectsList from '../ProjectsList'
import {
   ProjectsListWrapper,
   ProjectsListHeader,
   ChildWrapper
} from './styledComponent'
import { inject } from 'mobx-react'
@inject('projectStore')
class Projects extends React.Component<{ projectStore: any }> {
   render() {
      const { projectStore } = this.props

      return (
         <ProjectsListWrapper>
            <ProjectsListHeader>
               <Typo26BrightBlueHKGroteskRegular>
                  {i18n.listOfProjects}
               </Typo26BrightBlueHKGroteskRegular>
               {projectStore.isAdmin ? (
                  <CommonButton
                     buttonValue={i18n.create}
                     height={'30px'}
                     width={'80px'}
                  />
               ) : (
                  <div></div>
               )}
            </ProjectsListHeader>
            <ChildWrapper>
               <ProjectsList />
            </ChildWrapper>
         </ProjectsListWrapper>
      )
   }
}
export { Projects }
