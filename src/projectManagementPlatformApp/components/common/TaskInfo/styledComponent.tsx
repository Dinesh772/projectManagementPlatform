import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

export const TaskInfoWrapper = styled.div`
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
export const TaskInfoHeader = styled.div`
   display: flex;
   height: 40px;
   justify-content: space-between;
   background-color: ${Colors.white};
   color: ${Colors.steel};
   margin-top: 20px;
   padding-bottom: 15px;
   border-bottom: 0.8px solid ${Colors.lightBlueGrey};
`
export const TaskDetails = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px;
`
export const TaskTitleWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   flex-wrap: wrap;
   overflow: auto;
   padding-top: 10px;
   padding-bottom: 10px;
   min-height: 40px;
`
export const Text = styled.p`
   display: flex;
   flex-direction: column;
   overflow: auto;
`
export const Description = styled.div`
   display: flex;
   flex-wrap: Wrap;
   overscroll: auto;
   height: 125px;
   width: 100%;
   border: 1px solid ${Colors.lightBlueGrey};
`
export const DescriptionWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 10px;
   padding-bottom: 10px;
   width: 100%;
`
export const StatusWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   padding-top: 10px;
   padding-bottom: 10px;
`
export const CreatedAtWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   padding-top: 10px;
   padding-bottom: 10px;
`
