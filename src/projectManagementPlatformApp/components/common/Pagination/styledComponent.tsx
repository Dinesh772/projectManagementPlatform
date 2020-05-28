import styled from '@emotion/styled'

const PaginationWrapper = styled.div<{ hide: any }>`
   display: ${props => (props.hide ? 'none' : 'flex')};
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 80px;
`
export { PaginationWrapper }
