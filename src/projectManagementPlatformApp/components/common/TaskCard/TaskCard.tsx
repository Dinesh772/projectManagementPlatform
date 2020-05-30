import React from 'react'

import { observer } from 'mobx-react'

import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'

import { TaskCardWrapper } from './styledComponent'
@observer
class TaskCard extends React.Component<{ task: any; bgColor: any }> {
   render() {
      const { bgColor, task } = this.props
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.projectTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.createdAt}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>
               {task.status ?? 'todo'}
            </Typo18HKGroteskRegular>
         </TaskCardWrapper>
      )
   }
}
export { TaskCard }
