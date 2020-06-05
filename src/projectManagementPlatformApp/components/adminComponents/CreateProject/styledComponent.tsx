import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

export const CreateProjectWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   min-height: 72vh;
   border: 1px solid ${Colors.lightBlueGrey};
   border-radius: 6px;
   padding-left: 30px;
   padding-right: 30px;
   background-color: ${Colors.white};
`
export const CreateProjectHeader = styled.div`
   display: flex;
   height: 40px;
   justify-content: space-between;
   background-color: ${Colors.white};
   color: ${Colors.steel};
   margin-top: 20px;
   padding-bottom: 15px;
   border-bottom: 0.8px solid ${Colors.lightBlueGrey};
`
export const ProjectDetails = styled.form`
   display: flex;
   flex-direction: column;
   padding: 10px;
`
export const TextareaElement = styled.textarea`
   border: 1px solid black;
`
export const DropdownWrapper = styled.div`
   margin-top: 8px;
   margin-bottom: 12px;
   height: 50px;
`
export const CreateWorkflowWrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'flex' : 'none')};
   background-color: ${props =>
      props.hide ? Colors.black60 : Colors.whiteTwo};
`
export const CreateButtonWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   height: 100%;
   justify-content: center;
   align-items: center;
`
export const ToasterWrapper = styled.div`
   display: flex;
`
