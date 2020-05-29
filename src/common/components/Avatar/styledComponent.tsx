import styled from '@emotion/styled'

const AvatarImage = styled.img<{ height: any; width: any }>`
   height: ${props => props.height ?? '40px'};
   width: ${props => props.width ?? '40px'};
   border-radius: 100px;
   cursor: pointer;
`
export { AvatarImage }
