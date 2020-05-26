import React from 'react';
import {Button} from './StyledComponent'
import { Typo14WhiteRubikMedium } from "../../styleGuide/Typos";
const SignInButton=(props)=>(
<Button disabled={props.isDisabled} onSubmit={props.handleClick}><Typo14WhiteRubikMedium>{props.buttonValue}</Typo14WhiteRubikMedium></Button>
)
export default SignInButton
