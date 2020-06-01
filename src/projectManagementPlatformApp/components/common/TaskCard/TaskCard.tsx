import React from 'react'

import { observer } from 'mobx-react'

import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'

import { TaskCardWrapper, DropdownWrapper } from './styledComponent'
import { Dropdown } from '../../../../common/components/Dropdown/Dropdown'
@observer
class TaskCard extends React.Component<{ task: any; bgColor: any }> {
   handleDropdownChange = () => {}
   render() {
      const { bgColor, task } = this.props
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.projectTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.createdAt}</Typo18HKGroteskRegular>
            <DropdownWrapper>
               <Dropdown
                  values={task.status ?? ['todo', 'sda', 'asd', 'fsfsf']}
                  onChange={this.handleDropdownChange}
                  width={'100px;'}
               />
            </DropdownWrapper>
            {/* <Typo18HKGroteskRegular>
               {task.status ?? 'todo'}
            </Typo18HKGroteskRegular> */}
         </TaskCardWrapper>
      )
   }
}
export { TaskCard }
