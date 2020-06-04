import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Colors } from '../../../themes/Colors'

export const LoadingViewContainer = styled.div`
   ${tw`flex flex-col justify-center w-full items-center `}
   background-color:${Colors.whiteTwo};
   min-height:90vh;
`

export const FailureViewContainer = styled.div<{ height: any }>`
   ${tw`flex flex-col justify-center items-center `}
   background-color:inherit;
   min-height: ${props => props.height ?? '90vh'};
`

export const FailureViewMessage = styled.p`
   ${tw`m-6 text-2xl text-center`}
`

export const RetryButton = styled.button`
   ${tw`px-8 py-2  text-white text-lg rounded`}
   background-color:${Colors.brightBlue}
`
