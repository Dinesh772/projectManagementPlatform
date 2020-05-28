import React from 'react'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'

import { EachProjectWrapper } from './styledComponent'
class EachProject extends React.Component<{ project: any; bgColor: any }> {
   render() {
      const { project, bgColor } = this.props

      return (
         <EachProjectWrapper bgColor={bgColor}>
            <Typo18HKGroteskRegular>{project.name}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>
               {project.projectType}
            </Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>{project.createdAt}</Typo18HKGroteskRegular>
            <Typo18HKGroteskRegular>
               {project.whoCreated}
            </Typo18HKGroteskRegular>
         </EachProjectWrapper>
      )
   }
}
export { EachProject }
