import React from 'react'

import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import Timestamp from '../../../../../node_modules/react-timestamp/dist/index'
import i18n from '../../../../i18n/strings.json'
import {
   EachProjectWrapper,
   CreatedByWrapper,
   TextWrapper
} from './styledComponent'
import Avatar from '../../../../Common/components/Avatar/Avatar'

class ProjectCard extends React.Component<{
   project: any
   bgColor: any
   handleProjectClick: any
}> {
   handleClick = (event, value) => {
      const { handleProjectClick } = this.props
      handleProjectClick(value)
   }
   render() {
      const { project, bgColor } = this.props

      return (
         <EachProjectWrapper
            bgColor={bgColor}
            onClick={event => this.handleClick(event, project.id)}
         >
            <Typo18HKGroteskRegular>{project.name}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>
               {project.projectType}
            </Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>
               {project.workflowType}
            </Typo18HKGroteskRegular>

            <Typo18HKGroteskRegular>
               <Timestamp
                  date={new Date(project.createdAt)}
                  options={{ includeDay: false, twentyFourHour: false }}
               />
            </Typo18HKGroteskRegular>
            <CreatedByWrapper>
               <Avatar
                  path={i18n.avatarImageSrc}
                  height={'32px'}
                  width={'32px'}
               />
               <TextWrapper>{project.whoCreated}</TextWrapper>
            </CreatedByWrapper>
         </EachProjectWrapper>
      )
   }
}
export { ProjectCard }
