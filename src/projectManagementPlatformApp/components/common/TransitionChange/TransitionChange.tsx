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
   ChangeConfirmationWrapper
} from './styledComponent'
import { Typo18BoldHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import { Dropdown } from '../../../../common/components/Dropdown/Dropdown'
import { observable, toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Checkbox } from '../../../../common/components/Checkbox/Checkbox'
@observer
class TransitionChange extends React.Component<{
   handleClose: any
   taskObject: any
}> {
   @observable confirmTransitionChange = false
   @observable checkboxesChecked = 0
   handleTransitionChangeConfirmation = () => {
      this.confirmTransitionChange = !this.confirmTransitionChange
   }
   handleCheckbox = event => {
      const value = event.target.checked
      if (value) {
         this.checkboxesChecked++
      } else {
         this.checkboxesChecked--
      }
   }
   handleSubmit = () => {
      console.log(this.checkboxesChecked)
   }
   render() {
      const { handleClose, taskObject } = this.props
      const fromState = taskObject.status
      const toState = taskObject.to

      const checklistItems = taskObject.checklist ?? []
      const checklists = checklistItems.map(eachItem => (
         <Checkbox text={eachItem} handleClick={this.handleCheckbox} />
      ))
      const workflows = taskObject.workflow ?? []
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
            <TransitionCheckboxesWrapper>
               <StatusWrapper>
                  <DropdownWrapper>
                     <Dropdown
                        placeholder={fromState}
                        label={i18n.from}
                        values={workflows}
                     />
                  </DropdownWrapper>
                  <DropdownWrapper>
                     <Dropdown
                        label={i18n.to}
                        placeholder={toState}
                        values={workflows}
                     />
                  </DropdownWrapper>
               </StatusWrapper>
               <ChangeConfirmationWrapper>
                  {checklists}
               </ChangeConfirmationWrapper>
            </TransitionCheckboxesWrapper>
            <SubmitButtonWrapper>
               <CommonButton
                  height={'40px'}
                  width={'120px'}
                  buttonValue={i18n.update}
                  handleClick={this.handleSubmit}
               />
            </SubmitButtonWrapper>
         </TransitionChangeWrapper>
      )
   }
}
export { TransitionChange }
