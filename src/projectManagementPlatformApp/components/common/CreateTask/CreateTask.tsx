import React from 'react'

import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { BsCheckCircle } from 'react-icons/bs'
import { MdErrorOutline } from 'react-icons/md'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Typo18BoldHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import CloseButton from '../../../../Common/components/Avatar/Avatar'
import { Dropdown } from '../../../../Common/components/Dropdown/Dropdown'
import { UserTextareaInput } from '../../../../Common/components/UserTextAreaInput/UserTextAreaInput'
import UserTextInputField from '../../../../Common/components/UserTextInputField/UserTextInputField'
import CommonButton from '../../../../Common/components/CommonButton/CommonButton'
import { stringValidator } from '../../../../Authentication/utils/ValidationUtils/ValidationUtils'

import {
   CreateTaskWrapper,
   CreateTaskHeader,
   TaskDetails,
   DropdownWrapper,
   CreateButtonWrapper,
   ToasterWrapper
} from './styledComponent'

@observer
class CreateTask extends React.Component<{
   handleClose: any
   projectsData: any
   taskStore: any
}> {
   @observable createTaskDetails = {
      project: '',
      issueType: '',
      title: '',
      description: ''
   }
   @observable isValidated = false
   @observable taskTitleFieldHasError = false
   @observable taskTitleErrorMessage = ''
   @observable taskDescriptionHasError = false
   @observable taskDescriptionErrorMessage = ''
   @observable projectHasError = ''
   @observable issueTypeError = ''
   handleProjectChange = event => {
      const value = event.target.value
      this.createTaskDetails.project = value
      this.projectHasError = ''
      this.handleValidationChange()
   }

   handleIssueTypeChange = event => {
      const value = event.target.value
      this.createTaskDetails.issueType = value
      this.issueTypeError = ''
      this.handleValidationChange()
   }
   hadleTitleChange = event => {
      const value = event.target.value
      this.createTaskDetails.title = value
      this.taskTitleFieldHasError = false
      this.taskTitleErrorMessage = ''
      this.handleValidationChange()
   }
   handleDescriptionChange = event => {
      const value = event.target.value
      this.createTaskDetails.description = value
      this.taskDescriptionHasError = false
      this.taskDescriptionErrorMessage = ''
      this.handleValidationChange()
   }
   handleValidationChange = () => {
      const { createTaskDetails } = this
      if (!stringValidator(createTaskDetails.title)) {
         this.taskTitleErrorMessage = i18n.thisFieldIsRequired
         this.taskTitleFieldHasError = true
         this.isValidated = false
      }
      if (!stringValidator(createTaskDetails.description)) {
         this.taskDescriptionHasError = true
         this.taskDescriptionErrorMessage = i18n.thisFieldIsRequired
         this.isValidated = false
      }
      if (!stringValidator(createTaskDetails.project)) {
         this.projectHasError = i18n.thisFieldIsRequired
      }
      if (!stringValidator(createTaskDetails.issueType)) {
         this.issueTypeError = i18n.thisFieldIsRequired
      }
      if (
         stringValidator(createTaskDetails.title) &&
         stringValidator(createTaskDetails.project)
      ) {
         if (
            stringValidator(createTaskDetails.description) &&
            stringValidator(createTaskDetails.issueType)
         ) {
            this.isValidated = true
         }
      }
   }
   onSuccess = () => {
      const { handleClose } = this.props
      handleClose()
      toast.success(
         <React.Fragment>
            <ToasterWrapper>
               <BsCheckCircle color='white' size={20} />
               {'   Task Successfully created..!'}
            </ToasterWrapper>
         </React.Fragment>,
         {
            position: 'bottom-center',
            hideProgressBar: true,
            closeButton: false
         }
      )
      this.onResetAllToDefault()
   }
   onFailure = () => {
      const { handleClose } = this.props
      handleClose()
      toast.error(
         <React.Fragment>
            <ToasterWrapper>
               <MdErrorOutline color='white' size={20} />
               {'   Something went wrong..!'}
            </ToasterWrapper>
         </React.Fragment>,
         {
            position: 'bottom-center',
            hideProgressBar: true,
            closeButton: false
         }
      )
      this.onResetAllToDefault()
   }
   onResetAllToDefault = () => {
      this.createTaskDetails = {
         project: '',
         issueType: '',
         title: '',
         description: ''
      }
      this.isValidated = false
      this.taskTitleFieldHasError = false
      this.taskTitleErrorMessage = ''
      this.taskDescriptionHasError = false
      this.taskDescriptionErrorMessage = ''
      this.projectHasError = ''
      this.issueTypeError = ''
   }
   handleCreateButton = () => {
      if (this.isValidated) {
         const { taskStore } = this.props

         taskStore.createTaskAPI(
            this.createTaskDetails,
            this.onSuccess,
            this.onFailure
         )
      } else {
         this.handleValidationChange()
      }
   }
   handleClose = () => {
      const { handleClose } = this.props
      handleClose()
      this.onResetAllToDefault()
   }
   render() {
      const { taskStore, projectsData } = this.props
      const issueValues = [
         'Task',
         'Bug',
         'Developer',
         'story',
         'User',
         'story',
         'Enhancement'
      ]
      let projectsNames
      if (projectsData[0] !== undefined) {
         projectsNames = projectsData[0].map(each => each.name)
      } else {
         projectsNames = []
      }
      return (
         <CreateTaskWrapper>
            <CreateTaskHeader>
               <Typo18BoldHKGroteskRegular>
                  {i18n.createTask}
               </Typo18BoldHKGroteskRegular>
               <CloseButton
                  height={'20px'}
                  width={'20px'}
                  path={i18n.closeButtonSrc}
                  handleClick={this.handleClose}
               />
            </CreateTaskHeader>
            <TaskDetails>
               <DropdownWrapper>
                  <Dropdown
                     values={projectsNames}
                     handleFocus={this.handleProjectChange}
                     label={i18n.selectProject}
                     placeholder={'choose project'}
                     errorMessage={this.projectHasError}
                     handleChange={this.handleProjectChange}
                  />
               </DropdownWrapper>
               <DropdownWrapper>
                  <Dropdown
                     values={issueValues}
                     label={i18n.issueType}
                     handleFocus={this.handleIssueTypeChange}
                     placeholder={'choose project'}
                     errorMessage={this.issueTypeError}
                     handleChange={this.handleIssueTypeChange}
                  />
               </DropdownWrapper>
               <UserTextInputField
                  width={'100%'}
                  labelText={i18n.title}
                  value={this.createTaskDetails.title}
                  hasError={this.taskTitleFieldHasError}
                  errorMessage={this.taskTitleErrorMessage}
                  onChange={this.hadleTitleChange}
                  validate={this.handleValidationChange}
               />
               <UserTextareaInput
                  label={i18n.description}
                  width={'100%'}
                  hasError={this.taskDescriptionHasError}
                  errorMessage={this.taskDescriptionErrorMessage}
                  value={this.createTaskDetails.description}
                  testId={i18n.projectDescriptionTestId}
                  validate={this.handleValidationChange}
                  onChange={this.handleDescriptionChange}
               />

               <CreateButtonWrapper>
                  <CommonButton
                     buttonValue={i18n.createFinal}
                     height={'40px'}
                     width={'100%'}
                     apiStatus={taskStore.createTaskAPIStatus}
                     handleClick={this.handleCreateButton}
                     isDisabled={this.isValidated ? false : true}
                  />
               </CreateButtonWrapper>
            </TaskDetails>
         </CreateTaskWrapper>
      )
   }
}
export { CreateTask }
