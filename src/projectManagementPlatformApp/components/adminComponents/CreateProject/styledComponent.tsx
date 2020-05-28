import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

const CreateProjectWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 28%;
   height: 60vh;
   border: 1px solid ${Colors.lightBlueGrey};
   border-radius: 6px;
   background-color: ${Colors.white};
`
const CreateProjectHeader = styled.div`
   display: flex;
   height: 40px;
   justify-content: flex-end;
   background-color: ${Colors.white};
   color: ${Colors.steel};
   padding: 10px;
`
const ProjectDetails = styled.form`
   display: flex;
   flex-direction: column;
   padding: 10px;
`
const TextareaElement = styled.textarea`
   border: 1px solid black;
`
const DropdownWrapper = styled.div`
   margin-top: 8px;
`
const CreateWorkflowWrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   background-color: ${props =>
      props.hide ? Colors.black60 : Colors.whiteTwo};
`
export {
   CreateProjectWrapper,
   CreateProjectHeader,
   ProjectDetails,
   TextareaElement,
   DropdownWrapper,
   CreateWorkflowWrapper
}
