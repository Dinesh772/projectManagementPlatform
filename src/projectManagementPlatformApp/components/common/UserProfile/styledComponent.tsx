import styled from '@emotion/styled'

const UserProfileWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 60px;
   text-align: center;
   height: 100%;
`
const ProfileTextWrapper = styled.div`
   display: flex;
   width: 100%;
   @media (max-width: 475px) {
      display: none;
   }
`
export { UserProfileWrapper, ProfileTextWrapper }
