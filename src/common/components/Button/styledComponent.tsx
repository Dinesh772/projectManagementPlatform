import styled from '@emotion/styled'
import { Colors } from '../../../themes/Colors'

export const PrimaryButton = styled.button``

export const SecondaryButton = styled.button``

export const DefaultButton = styled.button<{ cssTypo: any }>`
${props => props.cssTypo}
background-color:${Colors.brightBlue};
`
