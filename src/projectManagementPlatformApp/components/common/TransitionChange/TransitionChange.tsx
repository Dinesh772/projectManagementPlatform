import React from 'react'
import CloseButton from '../../../../common/components/Avatar/Avatar'
import i18n from '../../../../i18n/strings.json'
import {
   TransitionChangeWrapper,
   TransitionChangeHeader,
   TransitionCheckboxesWrapper,
   SubmitButtonWrapper,
   DropdownWrapper,
   StatusWrapper
} from './styledComponent'
import { Typo18BoldHKGroteskRegular } from '../../../../styleGuide/Typos'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import { Dropdown } from '../../../../common/components/Dropdown/Dropdown'
class TransitionChange extends React.Component<{ handleClose: any }> {
   render() {
      const { handleClose } = this.props
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
                     <Dropdown label={i18n.from} values={[1, 2, 3]} />
                  </DropdownWrapper>
                  <DropdownWrapper>
                     <Dropdown label={i18n.to} values={[1, 2, 3]} />
                  </DropdownWrapper>
               </StatusWrapper>
            </TransitionCheckboxesWrapper>
            <SubmitButtonWrapper>
               <CommonButton
                  height={'40px'}
                  width={'120px'}
                  buttonValue={i18n.update}
               />
            </SubmitButtonWrapper>
         </TransitionChangeWrapper>
      )
   }
}
export { TransitionChange }
