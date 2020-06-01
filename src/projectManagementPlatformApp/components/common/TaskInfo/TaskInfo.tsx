import React from 'react'
import {
   Typo18BoldHKGroteskRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../../styleGuide/Typos'
import CloseButton from '../../../../common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import {
   TaskInfoWrapper,
   TaskInfoHeader,
   TaskDetails,
   Text,
   StatusWrapper,
   CreatedAtWrapper,
   TaskTitleWrapper,
   Description,
   DescriptionWrapper
} from './styledComponent'
class TaskInfo extends React.Component<{ handleClose: any; taskObject: any }> {
   render() {
      const { handleClose, taskObject } = this.props
      return (
         <TaskInfoWrapper>
            <TaskInfoHeader>
               <Typo18BoldHKGroteskRegular>
                  {i18n.taskDetails}
               </Typo18BoldHKGroteskRegular>
               <CloseButton
                  height={'20px'}
                  width={'20px'}
                  path={i18n.closeButtonSrc}
                  handleClick={handleClose}
               />
            </TaskInfoHeader>
            <TaskDetails>
               <TaskTitleWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.title.slice(0, -1)}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>{taskObject.taskTitle}</Text>
               </TaskTitleWrapper>
               <TaskTitleWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.projectName}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>{taskObject.projectTitle}</Text>
               </TaskTitleWrapper>
               <DescriptionWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.description.slice(0, -1)}
                  </Typo12SteelHKGroteskSemiBold>
                  <Description>{taskObject.description}</Description>
               </DescriptionWrapper>
               <StatusWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.status}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>{taskObject.workflow}</Text>
               </StatusWrapper>
               <CreatedAtWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.createdAt}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>{taskObject.createdAt}</Text>
               </CreatedAtWrapper>
            </TaskDetails>
         </TaskInfoWrapper>
      )
   }
}
export { TaskInfo }
