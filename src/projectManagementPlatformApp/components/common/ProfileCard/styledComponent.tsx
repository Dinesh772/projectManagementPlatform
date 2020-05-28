import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'

const ProfileCardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 25%;
   height: 100%;
   padding: 20px;
   background-color: ${Colors.whiteTwo};
`
const AvatarWrapper = styled.div`
   display: flex;
   width: 100%;
   margin-top: 40px;
   justify-content: center;
   height: 100%;
`
const ProfileDetails = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
`
const LogoutWrapper = styled.div`
   display: flex;
   justify-content: center;
`
export { ProfileCardWrapper, AvatarWrapper, ProfileDetails, LogoutWrapper }
