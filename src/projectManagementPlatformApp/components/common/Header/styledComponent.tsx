import styled from '@emotion/styled'
import { Colors } from '../../../../themes/Colors'
const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 60px;
   background-color: ${Colors.white};
   border: 1px solid ${Colors.lightBlueGrey};
`
const ChildWrapper = styled.div`
   display: flex;
`
const ProfileWrapper = styled.div`
   margin-right: 30px;
`
const LogoutButtonWrapper = styled.div`
   margin-top: 15px;
`
const IbHubsLogo = styled.div``
export {
   HeaderWrapper,
   IbHubsLogo,
   ChildWrapper,
   ProfileWrapper,
   LogoutButtonWrapper
}
