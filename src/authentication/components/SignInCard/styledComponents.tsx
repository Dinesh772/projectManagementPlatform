import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

const SignInWrapper = styled.form`
   display: flex;
   flex-direction: column;
   background-color: ${Colors.white};
   align-items: center;
   width: 436px;
   height: 550px;
   border-radius: 8px;
`
const IbHubsLogo = styled.div`
   margin-top: 10%;
`
const UsernameWrapper = styled.div`
   padding-top: 20px;
`
const PasswordWrapper = styled.div`
   padding-top: 10px;
   padding-bottom: 10px;
`
const LoginFailure = styled.div<{ hide: boolean }>`
   display: ${props => (props.hide ? 'block' : 'none')};
`
export {
   SignInWrapper,
   IbHubsLogo,
   UsernameWrapper,
   PasswordWrapper,
   LoginFailure
}
