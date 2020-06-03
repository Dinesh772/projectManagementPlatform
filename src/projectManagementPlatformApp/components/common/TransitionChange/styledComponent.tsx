import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

export const TransitionChangeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 30%;
   min-height: 70vh;
   border: 1px solid ${Colors.lightBlueGrey};
   border-radius: 6px;
   padding-left: 30px;
   padding-right: 30px;
   background-color: ${Colors.white};
`
export const TransitionChangeHeader = styled.div`
   display: flex;
   height: 40px;
   justify-content: space-between;
   background-color: ${Colors.white};
   color: ${Colors.steel};
   padding: 10px;
   padding-bottom: 40px;
   border-bottom: 0.8px solid ${Colors.lightBlueGrey};
`
export const TransitionCheckboxesWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 350px;
   overflow: auto;
   width: 100%;
`
export const SubmitButtonWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   justify-content: center;
   padding: 10px;
`
export const DropdownWrapper = styled.div`
   padding-left: 10px;
   margin: 5px;
   width: 200px;
`
export const StatusWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   height: 130px;
`
export const ChangeConfirmationWrapper = styled.div``
export const FetchingWrapper = styled.div`
   height: 50vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
