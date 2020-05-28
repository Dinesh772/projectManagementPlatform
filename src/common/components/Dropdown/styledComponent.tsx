import styled from '@emotion/styled'

const DropDownWrapper = styled.select<{ width: any }>`
   border: 0.6px solid lightgray;
   padding: 3px;
   border-radius: 4px;
   width: ${props => props.width ?? '150px'};
   :focus {
      outline: none;
   }
   :hover {
      outline: none;
   }
   :active {
      outline: none;
   }
`
const OptionElement = styled.option`
   :focus {
      outline: none;
   }
   :hover {
      outline: none;
   }
   :active {
      outline: none;
   }
`
export { DropDownWrapper, OptionElement }
