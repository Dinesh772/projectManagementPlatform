import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const SignInWrapper = styled.form`
   display: flex;
   flex-direction: column;
   background-color: ${Colors.white};
   align-items: center;
   width: 30%;
   height: 70%;
   border-radius: 8px;
`
const IbHubsLogo = styled.img`
   width: 90px;
   height: 90px;
   object-fit: contain;
   margin-top: 10%;
`
const UsernameWrapper = styled.div`
   padding-top: 20px;
`
const PasswordWrapper = styled.div`
   padding-top: 10px;
   padding-bottom: 10px;
`
export { SignInWrapper, IbHubsLogo, UsernameWrapper, PasswordWrapper }
