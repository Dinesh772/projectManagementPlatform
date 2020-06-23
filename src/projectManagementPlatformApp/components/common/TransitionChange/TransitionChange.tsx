import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
import { API_SUCCESS, API_FETCHING } from '@ib/api-constants'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import CloseButton from '../../../../Common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import {
   Typo18BoldHKGroteskRegular,
   Typo12NeonRedHKGroteskRegular,
   Typo12SteelHKGroteskSemiBold
} from '../../../../styleGuide/Typos'
import UpdateButton from '../../../../Common/components/CommonButton/CommonButton'
import { Checkbox } from '../../../../Common/components/Checkbox/Checkbox'
import { Colors } from '../../../../themes/Colors'
import FailureView from '../../../../Common/components/LoadingWrapperWithFailure/FailureView'

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

type TransitionChangePropTypes = {
   handleClose: Function
   taskObject: any
   checklistFetchingStatus: number
   handleSubmit: Function
   transitionApiStatus: number
   networkCalls: Function
}
type statesType = {
   from: string
   to: string
}
@observer
class TransitionChange extends React.Component<TransitionChangePropTypes> {
   @observable isValidated: boolean = false
   @observable checkboxesChecked: number = 0
   @observable validationErrorMessage: string = ''
   @observable changeStateErrorMessage: string = ''
   @observable mandatoryFieldIds: Array<[]> = []
   @observable checkedFieldIds: Array<[]> = []
   @observable states: statesType = {
      from: '',
      to: ''
   }
   @observable checkedList: Array<[]> = []
   componentWillReceiveProps(props) {
      this.onResetAllToDefault()
      this.states = {
         from: this.props.taskObject.status,
         to: this.props.taskObject.to
      }
      this.setMandatoryFields(this.props.taskObject.checklist ?? [])
   }

   setMandatoryFields = array => {
      let mandatoryFields: any = []
      for (let i = 0; i < array.length; ++i) {
         if (array[i].isMandatory) {
            mandatoryFields.push(array[i].id)
         }
      }
      this.mandatoryFieldIds = mandatoryFields
   }
   handleCheckbox = (event, id) => {
      const checkedFieldIds: any = this.checkedFieldIds
      if (!checkedFieldIds.includes(id)) {
         checkedFieldIds.push(id)
         this.checkedFieldIds = checkedFieldIds
      } else {
         const filteredList = checkedFieldIds.filter(each => each !== id)
         this.checkedFieldIds = filteredList
      }
      this.handleValidation()
   }

   handleValidation = () => {
      const result: any = []
      const { checkedFieldIds, mandatoryFieldIds } = this

      for (let i = 0; i < checkedFieldIds.length; ++i) {
         if (mandatoryFieldIds.includes(checkedFieldIds[i])) {
            result.push(checkedFieldIds[i])
         }
      }
      if (!(result.length >= mandatoryFieldIds.length)) {
         this.validationErrorMessage = i18n.aboveAllFieldsAreRequired
         this.isValidated = false
      } else {
         this.validationErrorMessage = ''
      }
      if (
         result.length >= mandatoryFieldIds.length &&
         !(this.states.from === this.states.to)
      ) {
         this.isValidated = true
      } else {
         this.isValidated = false
      }
   }
   handleSubmit = () => {
      const { handleSubmit } = this.props
      this.onResetAllToDefault()
      handleSubmit()
   }
   onResetAllToDefault = () => {
      this.isValidated = false
      this.checkboxesChecked = 0
      this.validationErrorMessage = ''
      this.changeStateErrorMessage = ''
      this.mandatoryFieldIds = []
      this.checkedFieldIds = []
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
      const { taskObject } = this.props
      const value = event.value
      taskObject.to = value
      this.states.to = value
      if (this.states.from !== this.states.to) {
         this.changeStateErrorMessage = ''
         this.doChecklistNetworkCalls()
         this.handleValidation()
      } else {
         this.isValidated = false
         this.changeStateErrorMessage = i18n.youCannotChangeStateToTheSameState
      }
   }
   doChecklistNetworkCalls = () => {
      const { networkCalls } = this.props
      networkCalls()
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
            handleClick={event => this.handleCheckbox(event, eachItem.id)}
         />
      ))
      const workflowsObjects = taskObject.workflows ?? []
      const workflows = workflowsObjects.map(workflow => workflow.name)

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
            ) : checklistFetchingStatus === API_FETCHING ? (
               <FetchingWrapper>
                  <Loader
                     type='TailSpin'
                     color={Colors.brightBlue}
                     height={40}
                     width={40}
                  />
               </FetchingWrapper>
            ) : (
               <FailureView
                  height={'300px'}
                  onRetryClick={this.doChecklistNetworkCalls}
                  errorMessage={i18n.somethingWentWrong}
               />
            )}
            <SubmitButtonWrapper
               hide={checklistFetchingStatus === API_SUCCESS ? true : false}
            >
               <UpdateButton
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
