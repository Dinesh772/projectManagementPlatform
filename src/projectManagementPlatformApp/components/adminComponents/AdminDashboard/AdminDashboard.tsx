import React from 'react'
import { observer } from 'mobx-react'
import Projects from '../../common/Projects'
import {
   AdminWrapper,
   AdminHeader,
   CreateProjectWrapper,
   ProjectsWrapper,
   PaginationWrapper
} from './styledComponent'
import Pagination from '../../common/Pagination'
import { Typo26BrightBlueHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import { observable } from 'mobx'
import CreateProject from '../CreateProject'
@observer
class AdminDashboard extends React.Component<{ projectStore: any }> {
   @observable isCreateClicked = false

   handleClick = () => {
      this.isCreateClicked = !this.isCreateClicked
   }
   render() {
      const { projectStore } = this.props

      return (
         <AdminWrapper>
            <AdminHeader backgroundColor={this.isCreateClicked}>
               <Typo26BrightBlueHKGroteskRegular>
                  {i18n.listOfProjects}
               </Typo26BrightBlueHKGroteskRegular>
               <CommonButton
                  buttonValue={i18n.create}
                  handleClick={this.handleClick}
                  height={'30px'}
                  width={'80px'}
               />
            </AdminHeader>
            <ProjectsWrapper backgroundColor={this.isCreateClicked}>
               <Projects projectStore={projectStore} />
            </ProjectsWrapper>
            <PaginationWrapper backgroundColor={this.isCreateClicked}>
               <Pagination
                  hide={projectStore.totalPaginationLimit <= 1}
                  projectStore={projectStore}
               />
            </PaginationWrapper>
            <CreateProjectWrapper hide={this.isCreateClicked}>
               <CreateProject handleClick={this.handleClick} />
            </CreateProjectWrapper>
         </AdminWrapper>
      )
   }
}

export { AdminDashboard }
