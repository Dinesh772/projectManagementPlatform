import styled from '@emotion/styled'

const ImageEl = styled.img<{ height: any; width: any }>`
   width: ${props => props.width ?? '90px'};
   height: ${props => props.height ?? '90px'};
   object-fit: contain;
`
export { ImageEl }
