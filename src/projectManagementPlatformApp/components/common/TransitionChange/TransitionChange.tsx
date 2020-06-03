import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
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
   Typo12NeonRedHKGroteskRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
//import { SimpleDropdown } from '../../../../common/components/Dropdown/Dropdown'
import { observable, toJS } from 'mobx'
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
   transitionApiStatus: any
   networkCalls: any
}> {
   @observable isValidated = false
   @observable checkboxesChecked = 0
   @observable validationErrorMessage = ''
   @observable changeStateErrorMessage = ''
   @observable states = {
      from: '',
      to: ''
   }
   @observable checkedList = []
   componentWillReceiveProps(props) {
      console.log('props')
      this.states = {
         from: this.props.taskObject.status,
         to: this.props.taskObject.to
      }
   }
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
         this.isValidated = false
      } else {
         this.validationErrorMessage = ''
      }
      if (this.states.from === this.states.to) {
         this.changeStateErrorMessage = i18n.youCannotChangeStateToTheSameState
      } else {
         this.changeStateErrorMessage = ''
      }
      if (
         !(this.checkboxesChecked < checklistItems.length) &&
         !(this.states.from === this.states.to)
      ) {
         this.isValidated = true
      } else {
         this.isValidated = false
      }
   }
   handleSubmit = () => {
      const { handleSubmit } = this.props
      if (this.isValidated) {
         this.onResetAllToDefault()
         handleSubmit()
      }
   }
   onResetAllToDefault = () => {
      this.isValidated = false
      this.checkboxesChecked = 0
      this.validationErrorMessage = ''
      this.changeStateErrorMessage = ''
      this.states = {
         from: '',
         to: ''
      }
   }
   handleDropdownChangeFromState = event => {
      const value = event.value
      this.states.from = value
      this.handleValidation()
   }
   handleDropdownChangeToState = event => {
      const { taskObject, networkCalls } = this.props
      const value = event.value
      taskObject.to = value
      this.states.to = value
      networkCalls()
      this.handleValidation()
   }

   handleClose = () => {
      const { handleClose } = this.props
      this.onResetAllToDefault()
      handleClose()
   }
   render() {
      const {
         taskObject,
         checklistFetchingStatus,
         transitionApiStatus
      } = this.props
      const fromPlceholder = this.states.from
      const toPlaceholder = this.states.to
      const checklistItems = taskObject.checklist ?? []
      const checklists = checklistItems.map(eachItem => (
         <Checkbox
            key={eachItem.id}
            text={eachItem.name}
            handleClick={this.handleCheckbox}
         />
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
                  handleClick={this.handleClose}
               />
            </TransitionChangeHeader>
            {checklistFetchingStatus === API_SUCCESS ? (
               <React.Fragment>
                  <TransitionCheckboxesWrapper>
                     <StatusWrapper>
                        <DropdownWrapper>
                           <Typo12SteelHKGroteskSemiBold>
                              {i18n.from}
                           </Typo12SteelHKGroteskSemiBold>
                           <Dropdown
                              options={workflows}
                              menuClassName='dropdown-menu'
                              placeholderClassName='dropdown-placeholder'
                              placeholder={fromPlceholder}
                              onChange={this.handleDropdownChangeFromState}
                              disabled={true}
                           />
                        </DropdownWrapper>
                        <DropdownWrapper>
                           <Typo12SteelHKGroteskSemiBold>
                              {i18n.to}
                           </Typo12SteelHKGroteskSemiBold>
                           <Dropdown
                              options={workflows}
                              menuClassName='dropdown-menu'
                              placeholderClassName='dropdown-placeholder'
                              placeholder={toPlaceholder}
                              onChange={this.handleDropdownChangeToState}
                           />
                        </DropdownWrapper>
                        <Typo12NeonRedHKGroteskRegular>
                           {this.changeStateErrorMessage}
                        </Typo12NeonRedHKGroteskRegular>
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
                  isDisabled={!this.isValidated}
                  height={'40px'}
                  width={'120px'}
                  buttonValue={i18n.update}
                  handleClick={this.handleSubmit}
                  apiStatus={transitionApiStatus}
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
