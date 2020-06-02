import React from 'react'
import CloseButton from '../../../../common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import {
   TransitionChangeWrapper,
   TransitionChangeHeader,
   TransitionCheckboxesWrapper,
   SubmitButtonWrapper,
   DropdownWrapper,
   StatusWrapper,
   ChangeConfirmationWrapper,
   FetchingWrapper
} from './styledComponent'
import {
   Typo18BoldHKGroteskRegular,
   Typo12NeonRedHKGroteskRegular
} from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import { SimpleDropdown } from '../../../../common/components/Dropdown/Dropdown'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Checkbox } from '../../../../common/components/Checkbox/Checkbox'

import Loader from 'react-loader-spinner'
import { API_SUCCESS } from '@ib/api-constants'
import { Colors } from '../../../../themes/Colors'
@observer
class TransitionChange extends React.Component<{
   handleClose: any
   taskObject: any
   checklistFetchingStatus: any
   handleSubmit: any
   apiStatus: any
}> {
   @observable isValidated = false
   @observable checkboxesChecked = 0
   @observable validationErrorMessage = ''
   handleCheckbox = event => {
      const value = event.target.checked
      if (value) {
         this.checkboxesChecked++
      } else {
         this.checkboxesChecked--
      }
      this.handleValidation()
   }
   handleValidation = () => {
      const { taskObject } = this.props
      const checklistItems = taskObject.checklist ?? []
      if (this.checkboxesChecked < checklistItems.length) {
         this.validationErrorMessage = i18n.aboveAllFieldsAreRequired
      } else {
         this.validationErrorMessage = ''
      }
   }
   handleSubmit = () => {
      const { handleSubmit } = this.props
      this.checkboxesChecked = 0
      this.validationErrorMessage = ''
      handleSubmit()
   }
   render() {
      const {
         handleClose,
         taskObject,
         checklistFetchingStatus,
         apiStatus
      } = this.props
      const fromState = taskObject.status
      const toState = taskObject.to
      const checklistItems = taskObject.checklist ?? []
      const checklists = checklistItems.map(eachItem => (
         <Checkbox text={eachItem} handleClick={this.handleCheckbox} />
      ))
      const workflows = taskObject.workflows ?? []
      return (
         <TransitionChangeWrapper>
            <TransitionChangeHeader>
               <Typo18BoldHKGroteskRegular>
                  {i18n.addNewTransition}
               </Typo18BoldHKGroteskRegular>
               <CloseButton
                  height={'20px'}
                  width={'20px'}
                  path={i18n.closeButtonSrc}
                  handleClick={handleClose}
               />
            </TransitionChangeHeader>
            {checklistFetchingStatus === API_SUCCESS ? (
               <React.Fragment>
                  <TransitionCheckboxesWrapper>
                     <StatusWrapper>
                        <DropdownWrapper>
                           <SimpleDropdown
                              placeholder={fromState}
                              label={i18n.from}
                              disableValue={fromState}
                              values={workflows}
                           />
                        </DropdownWrapper>
                        <DropdownWrapper>
                           <SimpleDropdown
                              label={i18n.to}
                              placeholder={toState}
                              disableValue={fromState}
                              values={workflows}
                           />
                        </DropdownWrapper>
                     </StatusWrapper>
                     <ChangeConfirmationWrapper>
                        {checklists}
                     </ChangeConfirmationWrapper>
                  </TransitionCheckboxesWrapper>
               </React.Fragment>
            ) : (
               <FetchingWrapper>
                  <Loader
                     type='TailSpin'
                     color={Colors.brightBlue}
                     height={40}
                     width={40}
                  />
               </FetchingWrapper>
            )}
            <SubmitButtonWrapper>
               <CommonButton
                  isDisabled={
                     this.checkboxesChecked < checklistItems.length
                        ? true
                        : false
                  }
                  height={'40px'}
                  width={'120px'}
                  buttonValue={i18n.update}
                  handleClick={this.handleSubmit}
                  apiStatus={apiStatus}
               />
               <Typo12NeonRedHKGroteskRegular>
                  {this.validationErrorMessage}
               </Typo12NeonRedHKGroteskRegular>
            </SubmitButtonWrapper>
         </TransitionChangeWrapper>
      )
   }
}
export { TransitionChange }
