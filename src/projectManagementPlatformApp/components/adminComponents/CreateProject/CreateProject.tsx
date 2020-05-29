import React from 'react'
import {
   CreateProjectWrapper,
   CreateProjectHeader,
   ProjectDetails,
   DropdownWrapper,
   CreateButtonWrapper
} from './styledComponent'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import UserTextInputField from '../../../../common/components/UserTextInputField/UserTextInputField'
import { UserTextareaInput } from '../../../../common/components/UserTextAreaInput/UserTextAreaInput'
import { Dropdown } from '../../../../common/components/Dropdown/Dropdown'
import { Typo18BoldHKGroteskRegular } from '../../../../styleGuide/Typos'
import { observable } from 'mobx'
import { stringValidator } from '../../../../authentication/utils/ValidationUtils/ValidationUtils'
import { observer } from 'mobx-react'
import CloseButton from '../../../../common/components/Avatar/Avatar'
@observer
class CreateProject extends React.Component<{
   handleClick: any
   workflows: any
   handleDropdown: any
   fetchingStatus: any
   createProject: any
}> {
   @observable projectData = {
      projectName: '',
      description: '',
      workflowType: '',
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

      this.projectData.description = value
      this.projectDescriptionHasError = false
      this.projectDescriptionErrorMessage = ''
      this.handleValidation()
   }
   handleWorkflowDropdownChange = event => {
      const value = event.target.value

      const { workflows, handleDropdown } = this.props
      if (workflows.length === 0) {
         handleDropdown()
      } else {
         this.projectData.workflowType = value.toString()
         this.projectWorkflowError = ''
      }
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
      if (!stringValidator(projectData.workflowType)) {
         this.projectWorkflowError = i18n.thisFieldIsRequired
      }
      if (
         stringValidator(projectData.projectName) &&
         stringValidator(projectData.description)
      ) {
         if (
            stringValidator(projectData.projectType) &&
            stringValidator(projectData.workflowType)
         ) {
            this.isValidated = true
         }
      }
   }

   handleSubmit = event => {
      event.preventDefault()

      if (this.isValidated) {
         const { createProject } = this.props
         createProject(this.onSuccess)
      } else {
         this.handleValidation()
      }
   }
   onSuccess = () => {
      window.location.reload()
   }
   handleClose = () => {
      const { handleClick } = this.props
      window.location.reload()
      handleClick()
   }
   render() {
      const { workflows, fetchingStatus } = this.props
      const workflowValues = workflows
      const projectTypeValues = [
         'Classic software',
         'Software project',
         'Financial software',
         'CRM software'
      ]
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
                  width={'380px'}
               />

               <UserTextareaInput
                  label={i18n.description}
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
                     placeholder={i18n.selectWorkflow}
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
                     apiStatus={fetchingStatus}
                  />
               </CreateButtonWrapper>
            </ProjectDetails>
         </CreateProjectWrapper>
      )
   }
}
export { CreateProject }
