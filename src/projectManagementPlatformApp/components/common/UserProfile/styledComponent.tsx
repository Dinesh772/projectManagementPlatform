import styled from '@emotion/styled'

export const UserProfileWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 60px;
   text-align: center;
   height: 100%;
`
export const ProfileTextWrapper = styled.div`
   display: flex;
   width: 100%;
   @media (max-width: 475px) {
      display: none;
   }
`
