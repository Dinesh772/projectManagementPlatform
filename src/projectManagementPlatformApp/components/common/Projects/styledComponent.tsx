import styled from '@emotion/styled'

const ProjectsListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
`
const ProjectsListHeader = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding-left: 80px;
   padding-right: 80px;
   padding-top: 30px;
   padding-bottom: 30px;
`
const ChildWrapper = styled.div`
   display: flex;
   height: 500px;
   justify-content: center;
`
export { ProjectsListWrapper, ProjectsListHeader, ChildWrapper }
