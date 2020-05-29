import React from 'react'
import { TasksListWrapper, TasksListHeader } from './styledComponent'
import { Typo16HKGroteskMedium } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import TaskCard from '../TaskCard'
import { Colors } from '../../../../themes/Colors'
import { observer } from 'mobx-react'
//import LoadingWrapperWithFailure from '../../../../common/components/LoadingWrapperWithFailure'

@observer
class TasksList extends React.Component<{ taskStore: any }> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   componentWillUnmount() {
      const { taskStore } = this.props
      taskStore.clearStore()
   }

   doNetworkCalls = () => {
      const { taskStore } = this.props
      taskStore.getTasksAPI()
   }
   render() {
      const { taskStore } = this.props
      const data = taskStore.renderedTasksList.map((eachTask, index) => (
         <TaskCard
            key={eachTask.id}
            bgColor={index % 2 === 0 ? Colors.lightBlueGrey24 : Colors.white}
            task={eachTask}
         />
      ))
      return (
         <TasksListWrapper>
            <TasksListHeader>
               <Typo16HKGroteskMedium>{i18n.listOfTasks}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>{i18n.summary}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>{i18n.createdAt}</Typo16HKGroteskMedium>
               <Typo16HKGroteskMedium>{i18n.status}</Typo16HKGroteskMedium>
            </TasksListHeader>
            {data}
         </TasksListWrapper>
      )
   }
}
export { TasksList }
