import React from 'react'

import {
   Typo18BoldHKGroteskRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../../styleGuide/Typos'
import Timestamp from '../../../../../node_modules/react-timestamp/dist/index'

import CloseButton from '../../../../Common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import { TaskModelType } from '../../../stores/TaskStore/TaskStore'
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

type TaskInfoProps = {
   handleClose: Function
   taskObject: any
}
class TaskInfo extends React.Component<TaskInfoProps> {
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
                     {i18n.createdBy}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>{taskObject.createdBy}</Text>
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
                  <Text>{taskObject.status}</Text>
               </StatusWrapper>
               <CreatedAtWrapper>
                  <Typo12SteelHKGroteskSemiBold>
                     {i18n.createdAt}
                  </Typo12SteelHKGroteskSemiBold>
                  <Text>
                     <Timestamp
                        date={new Date(taskObject.createdAt)}
                        options={{ includeDay: false, twentyFourHour: false }}
                     />
                  </Text>
               </CreatedAtWrapper>
            </TaskDetails>
         </TaskInfoWrapper>
      )
   }
}
export { TaskInfo }
