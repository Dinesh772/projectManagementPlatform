import React from 'react'

import { observer } from 'mobx-react'
import { BsInfoCircle } from 'react-icons/bs'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'
import { Colors } from '../../../../themes/Colors'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdErrorOutline } from 'react-icons/md'

import {
   TaskCardWrapper,
   DropdownWrapper,
   InfoWrapper,
   Loadingwrapper,
   ToastMessage
} from './styledComponent'
import { API_FETCHING, API_FAILED } from '@ib/api-constants'
import Loader from '../../../../Common/components/Icons/Loader/SvgFile'

//import { SimpleDropdown } from '../../../../common/components/Dropdown/Dropdown'
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
      const { handleStatusChange } = this.props
      const value = event.value
      handleStatusChange(value, task)
   }
   handleDropdownFailure = () => {
      toast.error(
         <React.Fragment>
            <ToastMessage>
               <MdErrorOutline color='white' size={20} />
               {'Something went wrong'}
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
      const options = workflows ?? []
      if (workflowsAPIStatus === API_FAILED) {
         this.handleDropdownFailure()
      }
      const disable =
         options.length === 0
            ? true
            : task.status === options.slice(-1)[0]
            ? true
            : false
      console.log('-->', task.status === options.slice(-1)[0] ? true : false)
      return (
         <TaskCardWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{task.taskTitle}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.description}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{task.createdAt}</Typo18HKGroteskRegular>

            <DropdownWrapper>
               <Dropdown
                  className='dropdown'
                  options={options}
                  placeholder={task.status}
                  onChange={event => this.handleDropdownChange(event, task)}
                  onFocus={handleDropdownClick}
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
