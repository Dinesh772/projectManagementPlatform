import React from 'react'

import { observer } from 'mobx-react'
import { BsInfoCircle } from 'react-icons/bs'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import {
   TaskCardWrapper,
   DropdownWrapper,
   InfoWrapper
} from './styledComponent'
import { SimpleDropdown } from '../../../../common/components/Dropdown/Dropdown'
import Avatar from '../../../../common/components/Avatar/Avatar'
@observer
class TaskCard extends React.Component<{
   task: any
   bgColor: any
   handleTaskInfo: any
   handleStatusChange: any
}> {
   handleDropdownChange = () => {
      const { handleStatusChange } = this.props
      handleStatusChange()
   }
   render() {
      const { bgColor, task, handleTaskInfo } = this.props
      const options = ['todo', 'sda', 'asd', 'fsfsf']
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.taskTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.createdAt}</Typo18HKGroteskRegular>

            <DropdownWrapper>
               <SimpleDropdown
                  values={options}
                  placeholder={options[0]}
                  handleChange={this.handleDropdownChange}
               />
            </DropdownWrapper>
            <InfoWrapper onClick={event => handleTaskInfo(event, task)}>
               <BsInfoCircle />
            </InfoWrapper>
         </TaskCardWrapper>
      )
   }
}
export { TaskCard }
