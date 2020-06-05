import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../../themes/Colors'

export const NoDataViewContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 75vh;
   width: 100%;
   background-color: ${Colors.whiteTwo};
   justify-content: center;
   align-items: center;
`
export const ImageWrapper = styled.div``
export const NoDataViewText = styled.div`
   ${tw`text-xl`}
`
export const Text = styled.h2`
   height: 60px;
   font-family: 'HKGroteskRegular';
   font-size: 24px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;

   line-height: 1.33;
   letter-spacing: normal;
   padding: 14px;
   color: ${Colors.darkBlueGrey};
   @media (max-width: 350px) {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
   }
`
