import React from 'react'

import { observer } from 'mobx-react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdErrorOutline } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import { API_FETCHING, API_FAILED } from '@ib/api-constants'
import Timestamp from '../../../../../node_modules/react-timestamp/dist/index'

import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import Loader from '../../../../Common/components/Icons/Loader/SvgFile'
import { Colors } from '../../../../themes/Colors'
import i18n from '../../../../i18n/strings.json'
import Avatar from '../../../../Common/components/Avatar/Avatar'

import {
   TaskCardWrapper,
   DropdownWrapper,
   InfoWrapper,
   Loadingwrapper,
   ToastMessage,
   CreatedByWrapper,
   TextWrapper
} from './styledComponent'

@observer
class TaskCard extends React.Component<{
   task: any
   bgColor: any
   handleTaskInfo: any
   handleStatusChange: any
   workflows: any
   handleDropdownClick: any
   workflowsAPIStatus: any
}> {
   handleDropdownChange = (event, task) => {
      const { handleStatusChange, workflows } = this.props

      const value = event.value

      const toState = workflows.filter(task =>
         task.name === value ? task.stateId : null
      )

      const toStateId = toState[0].stateId
      handleStatusChange(value, task, toStateId)
   }
   handleDropdownFailure = () => {
      toast.error(
         <React.Fragment>
            <ToastMessage>
               <MdErrorOutline color='white' size={20} />
               {i18n.somethingWentWrong}
            </ToastMessage>
         </React.Fragment>,
         {
            position: 'bottom-center',
            hideProgressBar: true,
            closeButton: false
         }
      )
      toast.clearWaitingQueue()
   }
   render() {
      const {
         bgColor,
         task,
         handleTaskInfo,
         workflows,
         handleDropdownClick,
         workflowsAPIStatus
      } = this.props

      const options = workflows.map(workflow => workflow.name) ?? []
      if (workflowsAPIStatus === API_FAILED) {
         this.handleDropdownFailure()
      }
      const disable =
         options.length === 0
            ? true
            : task.status === options.slice(-1)[0]
            ? true
            : false
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.taskTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <CreatedByWrapper>
               <Avatar
                  path={i18n.avatarImageSrc}
                  height={'32px'}
                  width={'32px'}
               />
               <TextWrapper>{task.createdBy}</TextWrapper>
            </CreatedByWrapper>

            <Typo18HKGroteskRegular>
               <Timestamp
                  date={new Date(task.createdAt)}
                  options={{ includeDay: false, twentyFourHour: false }}
               />
            </Typo18HKGroteskRegular>

            <DropdownWrapper>
               <Dropdown
                  className='dropdown'
                  options={options}
                  placeholder={task.status}
                  onChange={event => this.handleDropdownChange(event, task)}
                  onFocus={event => handleDropdownClick(event, task.id)}
                  placeholderClassName='dropdown-placeholder'
                  menuClassName='dropdown-menu'
                  disabled={disable}
               />
               <Loadingwrapper hide={workflowsAPIStatus === API_FETCHING}>
                  <Loader type='threedots' height={8} width={20} />
               </Loadingwrapper>
            </DropdownWrapper>
            <InfoWrapper onClick={event => handleTaskInfo(event, task)}>
               <BsInfoCircle color={Colors.steel} />
            </InfoWrapper>
         </TaskCardWrapper>
      )
   }
}
export { TaskCard }
