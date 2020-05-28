import React from 'react'
import {
   CreateProjectWrapper,
   CreateProjectHeader,
   ProjectDetails,
   DropdownWrapper
} from './styledComponent'
import CommonButton from '../../../../common/components/CommonButton/CommonButton'
import i18n from '../../../../i18n/strings.json'
import { Colors } from '../../../../themes/Colors'
import UserTextInputField from '../../../../common/components/UserTextInputField/UserTextInputField'
import { UserTextareaInput } from '../../../../common/components/UserTextAreaInput/UserTextAreaInput'
import { Dropdown } from '../../../../common/components/Dropdown/Dropdown'

class CreateProject extends React.Component<{ handleClick: any }> {
   render() {
      const { handleClick } = this.props
      const workflowValues = [
         'TODO',
         'IN Progress',
         'To be reviewed',
         'Backlog'
      ]
      const projectTypeValues = ['Classic', 'Software', 'Financial', 'CRM']
      return (
         <CreateProjectWrapper>
            <CreateProjectHeader>
               <CommonButton
                  handleClick={handleClick}
                  buttonValue={i18n.close}
                  height={'30px'}
                  width={'80px'}
                  bgColor={Colors.white}
                  borderColor={Colors.lightBlueGrey}
                  textColor={Colors.darkBlueGrey}
               />
            </CreateProjectHeader>
            <ProjectDetails>
               <UserTextInputField labelText={i18n.nameOfProject} />

               <UserTextareaInput label={i18n.description} />
               <DropdownWrapper>
                  <Dropdown values={workflowValues} label={i18n.workflowType} />
               </DropdownWrapper>
               <DropdownWrapper>
                  <Dropdown
                     values={projectTypeValues}
                     label={i18n.projectType}
                  />
               </DropdownWrapper>
            </ProjectDetails>

            <CommonButton
               buttonValue={i18n.createFinal}
               height={'30px'}
               width={'80px'}
            />
         </CreateProjectWrapper>
      )
   }
}
export { CreateProject }
