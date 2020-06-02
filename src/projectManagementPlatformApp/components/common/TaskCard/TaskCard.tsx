import React from 'react'

import { observer } from 'mobx-react'
import { BsInfoCircle } from 'react-icons/bs'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import { Colors } from '../../../../themes/Colors'

import {
   TaskCardWrapper,
   DropdownWrapper,
   InfoWrapper
} from './styledComponent'
import { SimpleDropdown } from '../../../../common/components/Dropdown/Dropdown'
@observer
class TaskCard extends React.Component<{
   task: any
   bgColor: any
   handleTaskInfo: any
   handleStatusChange: any
   workflows: any
}> {
   handleDropdownChange = (event, task) => {
      const { handleStatusChange } = this.props
      const value = event.target.value
      handleStatusChange(value, task)
   }
   render() {
      const { bgColor, task, handleTaskInfo, workflows } = this.props
      const options = workflows ?? []
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.taskTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.createdAt}</Typo18HKGroteskRegular>

            <DropdownWrapper>
               <SimpleDropdown
                  values={options}
                  placeholder={task.status}
                  handleChange={event => this.handleDropdownChange(event, task)}
                  disableValue={task.status}
               />
            </DropdownWrapper>
            <InfoWrapper onClick={event => handleTaskInfo(event, task)}>
               <BsInfoCircle color={Colors.steel} />
            </InfoWrapper>
         </TaskCardWrapper>
      )
   }
}
export { TaskCard }
