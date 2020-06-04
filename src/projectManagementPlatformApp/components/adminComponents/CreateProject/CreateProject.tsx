import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BsCheckCircle } from 'react-icons/bs'

import {
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL,
   API_FAILED
} from '@ib/api-constants'

import CommonButton from '../../../../Common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import UserTextInputField from '../../../../Common/components/UserTextInputField/UserTextInputField'
import { UserTextareaInput } from '../../../../Common/components/UserTextAreaInput/UserTextAreaInput'
import { Dropdown } from '../../../../Common/components/Dropdown/Dropdown'
import {
   Typo18BoldHKGroteskRegular,
   Typo12NeonRedHKGroteskRegular
} from '../../../../styleGuide/Typos'
import { stringValidator } from '../../../../Authentication/utils/ValidationUtils/ValidationUtils'
import CloseButton from '../../../../Common/components/Avatar/Avatar'

import {
   CreateProjectWrapper,
   CreateProjectHeader,
   ProjectDetails,
   DropdownWrapper,
   ToasterWrapper,
   CreateButtonWrapper
} from './styledComponent'

@observer
class CreateProject extends React.Component<{
   handleClick: any
   workflows: any
   handleDropdown: any
   createProject: any
   workflowFetchingStatus: any
   createProjectFetchingStataus: any
}> {
   @observable projectData = {
      projectName: '',
      description: '',
      workflowType: 0,
      projectType: ''
   }
   @observable projectNameFieldHasError = false
   @observable projectNameErrorMessage = ''
   @observable projectDescriptionHasError = false
   @observable projectDescriptionErrorMessage = ''
   @observable projectWorkflowError = ''
   @observable projectTypeError = ''
   @observable isValidated = false
   handleTitleChange = event => {
      const value = event.target.value

      this.projectData.projectName = value
      this.projectNameErrorMessage = ''
      this.projectNameFieldHasError = false

      this.handleValidation()
   }
   handleDescriptionChange = event => {
      const value = event.target.value
      console.log(value)
      this.projectData.description = value
      this.projectDescriptionHasError = false
      this.projectDescriptionErrorMessage = ''
      this.handleValidation()
   }
   handleWorkflowDropdownChange = event => {
      const value = event.target.value
      const { workflows } = this.props
      let selectedId
      for (let i = 0; i < workflows.length; ++i) {
         if (workflows[i].name === value) {
            selectedId = workflows[i].workflowId
            break
         }
      }
      this.projectData.workflowType = selectedId

      this.projectWorkflowError = ''
      this.handleValidation()
   }
   handleProjectTypeDropdown = event => {
      const value = event.target.value
      this.projectData.projectType = value.toString()
      this.projectTypeError = ''
      this.handleValidation()
   }
   handleValidation = () => {
      const { projectData } = this
      if (!stringValidator(projectData.projectName)) {
         this.projectNameErrorMessage = i18n.thisFieldIsRequired
         this.projectNameFieldHasError = true
         this.isValidated = false
      }
      if (!stringValidator(projectData.description)) {
         this.projectDescriptionHasError = true
         this.projectDescriptionErrorMessage = i18n.thisFieldIsRequired
         this.isValidated = false
      }
      if (!stringValidator(projectData.projectType)) {
         this.projectTypeError = i18n.thisFieldIsRequired
      }
      if (projectData.workflowType === 0) {
         this.projectWorkflowError = i18n.thisFieldIsRequired
      }
      if (
         stringValidator(projectData.projectName) &&
         stringValidator(projectData.description)
      ) {
         if (
            stringValidator(projectData.projectType) &&
            projectData.workflowType !== 0
         ) {
            this.isValidated = true
         }
      }
   }

   handleSubmit = event => {
      event.preventDefault()

      if (this.isValidated) {
         const { createProject } = this.props
         const projectData = this.projectData
         const projectObject = {
            name: projectData.projectName,
            description: projectData.description,
            project_type: projectData.projectType,
            workflow_type: projectData.workflowType,
            assigned_to: []
         }
         createProject(projectObject, this.onSuccess)
      } else {
         this.handleValidation()
      }
   }
   onSuccess = () => {
      this.onResetAllToDefault()
      const { handleClick } = this.props
      toast.success(
         <React.Fragment>
            <ToasterWrapper>
               <BsCheckCircle color='white' size={20} />
               {i18n.projectCreatedSuccessfully}
            </ToasterWrapper>
         </React.Fragment>,
         {
            position: 'bottom-center',
            hideProgressBar: true,
            closeButton: false
         }
      )
      handleClick()
   }
   onResetAllToDefault = () => {
      this.projectData = {
         projectName: '',
         description: '',
         workflowType: 0,
         projectType: ''
      }
      this.projectNameFieldHasError = false
      this.projectNameErrorMessage = ''
      this.projectDescriptionHasError = false
      this.projectDescriptionErrorMessage = ''
      this.projectWorkflowError = ''
      this.projectTypeError = ''
      this.isValidated = false
   }
   handleClose = () => {
      this.onResetAllToDefault()
      const { handleClick } = this.props
      handleClick()
   }
   render() {
      const {
         workflows,
         workflowFetchingStatus,
         createProjectFetchingStataus
      } = this.props
      const workflowValues = workflows.map(workflow => workflow.name) || []
      const projectTypeValues = [
         i18n.classicSoftware,
         i18n.financialSoftware,
         i18n.crmSoftware
      ]
      const workFlowsDropdownPlaceholder =
         workflowFetchingStatus === API_SUCCESS
            ? i18n.selectProjectPlaceholder
            : workflowFetchingStatus === API_INITIAL || API_FETCHING
            ? i18n.loading
            : i18n.somethingWentWrong

      return (
         <CreateProjectWrapper>
            <CreateProjectHeader>
               <Typo18BoldHKGroteskRegular>
                  {i18n.createHeading}
               </Typo18BoldHKGroteskRegular>
               <CloseButton
                  height={'20px'}
                  width={'20px'}
                  path={i18n.closeButtonSrc}
                  handleClick={this.handleClose}
               />
            </CreateProjectHeader>
            <ProjectDetails>
               <UserTextInputField
                  labelText={i18n.nameOfProject}
                  onChange={this.handleTitleChange}
                  hasError={this.projectNameFieldHasError}
                  errorMessage={this.projectNameErrorMessage}
                  validate={this.handleValidation}
                  value={this.projectData.projectName}
                  testId={i18n.createProjectNameTestId}
                  width={'100%'}
               />

               <UserTextareaInput
                  label={i18n.description}
                  width={'100%'}
                  onChange={this.handleDescriptionChange}
                  hasError={this.projectDescriptionHasError}
                  errorMessage={this.projectDescriptionErrorMessage}
                  validate={this.handleValidation}
                  value={this.projectData.description}
                  testId={i18n.projectDescriptionTestId}
               />
               <DropdownWrapper>
                  <Dropdown
                     values={workflowValues}
                     label={i18n.workflowType}
                     handleChange={this.handleWorkflowDropdownChange}
                     handleFocus={this.handleWorkflowDropdownChange}
                     errorMessage={this.projectWorkflowError}
                     placeholder={workFlowsDropdownPlaceholder}
                     disabled={
                        workflowFetchingStatus === API_SUCCESS ? false : true
                     }
                  />
               </DropdownWrapper>
               <DropdownWrapper>
                  <Dropdown
                     values={projectTypeValues}
                     label={i18n.projectType}
                     handleChange={this.handleProjectTypeDropdown}
                     errorMessage={this.projectTypeError}
                     placeholder={i18n.selectType}
                     handleFocus={this.handleValidation}
                  />
               </DropdownWrapper>
               <CreateButtonWrapper>
                  <CommonButton
                     buttonValue={i18n.createFinal}
                     height={'40px'}
                     width={'100%'}
                     handleClick={this.handleSubmit}
                     apiStatus={createProjectFetchingStataus}
                     isDisabled={!this.isValidated}
                  />
                  <Typo12NeonRedHKGroteskRegular>
                     {createProjectFetchingStataus === API_FAILED
                        ? i18n.somethingWentWrong
                        : ''}
                  </Typo12NeonRedHKGroteskRegular>
               </CreateButtonWrapper>
            </ProjectDetails>
         </CreateProjectWrapper>
      )
   }
}
export { CreateProject }
