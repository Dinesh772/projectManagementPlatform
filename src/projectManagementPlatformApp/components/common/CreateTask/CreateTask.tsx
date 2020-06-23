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
import TaskStore from '../../../stores/TaskStore'
import { ProjectModelType } from '../../../stores/ProjectStore/ProjectStore'

type CreateTaskProps = {
   handleClose: Function
   projectsData: Array<Array<ProjectModelType>>
   taskStore: TaskStore
   totalProjects: Array<ProjectModelType>
}
type CreateTaskDetailsType = {
   project: number
   issueType: string
   title: string
   description: string
}
@observer
class CreateTask extends React.Component<CreateTaskProps> {
   @observable createTaskDetails: CreateTaskDetailsType = {
      project: 0,
      issueType: '',
      title: '',
      description: ''
   }
   @observable isValidated: boolean = false
   @observable taskTitleFieldHasError: boolean = false
   @observable taskTitleErrorMessage: string = ''
   @observable taskDescriptionHasError: boolean = false
   @observable taskDescriptionErrorMessage: string = ''
   @observable projectHasError: string = ''
   @observable issueTypeError: string = ''
   handleProjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      if (stringValidator(value)) {
         const { totalProjects } = this.props
         let projectId = 0
         for (let i = 0; i < totalProjects.length; ++i) {
            if (totalProjects[i].name === value) {
               projectId = totalProjects[i].id
               break
            }
         }
         this.createTaskDetails.project = projectId

         this.projectHasError = ''
         this.handleValidationChange()
      } else {
         this.projectHasError = i18n.thisFieldIsRequired
         this.isValidated = false
      }
   }

   handleIssueTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      if (stringValidator(value)) {
         this.createTaskDetails.issueType = value
         this.issueTypeError = ''
         this.handleValidationChange()
      } else {
         this.isValidated = false
         this.issueTypeError = i18n.thisFieldIsRequired
      }
   }
   hadleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      this.createTaskDetails.title = value
      if (stringValidator(value)) {
         this.taskTitleFieldHasError = false
         this.taskTitleErrorMessage = ''
         this.handleValidationChange()
      } else {
         this.taskTitleErrorMessage = i18n.thisFieldIsRequired
         this.taskTitleFieldHasError = true
         this.isValidated = false
      }
   }
   handleDescriptionChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      const value = event.target.value
      this.createTaskDetails.description = value
      if (stringValidator(value)) {
         this.taskDescriptionHasError = false
         this.taskDescriptionErrorMessage = ''
         this.handleValidationChange()
      } else {
         this.taskDescriptionHasError = true
         this.taskDescriptionErrorMessage = i18n.thisFieldIsRequired
         this.isValidated = false
      }
   }
   handleValidationChange = () => {
      const { createTaskDetails } = this
      if (
         stringValidator(createTaskDetails.title) &&
         createTaskDetails.project !== 0
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
               {i18n.taskCreatedSuccessfully}
            </ToasterWrapper>
         </React.Fragment>,
         {
            position: 'bottom-center',
            hideProgressBar: true,
            closeButton: false
         }
      )

      this.onResetAllToDefault()
      setTimeout(() => window.location.reload(), 500)
   }
   onFailure = () => {
      const { handleClose } = this.props
      handleClose()
      toast.error(
         <React.Fragment>
            <ToasterWrapper>
               <MdErrorOutline color='white' size={20} />
               {i18n.somethingWentWrong}
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
         project: 0,
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
         const { createTaskDetails } = this
         const createObject = {
            project: createTaskDetails.project,
            title: createTaskDetails.title,
            description: createTaskDetails.description,
            issue_type: createTaskDetails.issueType
         }
         taskStore.createTaskAPI(createObject, this.onSuccess, this.onFailure)
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
      const { taskStore, totalProjects } = this.props
      const issueValues = [
         i18n.enumTask,
         i18n.enumBug,
         i18n.enumDeveloperStory,
         i18n.enumUserStory,
         i18n.enumEnhancement
      ]

      let projectsNames
      if (totalProjects !== undefined) {
         projectsNames = totalProjects.map(each => each.name)
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
                  testId={'close'}
               />
            </CreateTaskHeader>
            <TaskDetails>
               <DropdownWrapper>
                  <Dropdown
                     values={projectsNames}
                     handleFocus={this.handleProjectChange}
                     label={i18n.selectProject}
                     placeholder={i18n.chooseProject}
                     errorMessage={this.projectHasError}
                     handleChange={this.handleProjectChange}
                     testId='project-dropdown'
                  />
               </DropdownWrapper>
               <DropdownWrapper>
                  <Dropdown
                     values={issueValues}
                     label={i18n.issueType}
                     handleFocus={this.handleIssueTypeChange}
                     placeholder={i18n.chooseIssueType}
                     errorMessage={this.issueTypeError}
                     handleChange={this.handleIssueTypeChange}
                     testId='issue-dropdown'
                  />
               </DropdownWrapper>
               <UserTextInputField
                  width={'100%'}
                  labelText={i18n.title}
                  value={this.createTaskDetails.title}
                  hasError={this.taskTitleFieldHasError}
                  errorMessage={this.taskTitleErrorMessage}
                  onChange={this.hadleTitleChange}
                  validate={this.hadleTitleChange}
                  testId='task-title'
               />
               <UserTextareaInput
                  label={i18n.description}
                  width={'100%'}
                  hasError={this.taskDescriptionHasError}
                  errorMessage={this.taskDescriptionErrorMessage}
                  value={this.createTaskDetails.description}
                  testId={i18n.projectDescriptionTestId}
                  validate={this.handleDescriptionChange}
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
                     testId={'submit'}
                  />
               </CreateButtonWrapper>
            </TaskDetails>
         </CreateTaskWrapper>
      )
   }
}
export { CreateTask }
