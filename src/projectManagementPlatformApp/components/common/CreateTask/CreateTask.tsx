import React from 'react'
import {
   CreateTaskWrapper,
   CreateTaskHeader,
   TaskDetails
} from './styledComponent'
import { Typo18BoldHKGroteskRegular } from '../../../../styleGuide/Typos'
import i18n from '../../../../i18n/strings.json'
import CloseButton from '../../../../common/components/Avatar/Avatar'

class CreateTask extends React.Component<{ handleClose: any }> {
   render() {
      const { handleClose } = this.props
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
                  handleClick={handleClose}
               />
            </CreateTaskHeader>
            <TaskDetails></TaskDetails>
         </CreateTaskWrapper>
      )
   }
}
export { CreateTask }
