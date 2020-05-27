import React from 'react'
import { Typo18HKGroteskRegular } from '../../../../styleGuide/Typos'

import { EachProjectWrapper } from './styledComponent'
class EachProject extends React.Component<{ project: any }> {
   render() {
      const { project } = this.props

      return (
         <EachProjectWrapper>
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
// name": "Project management platform",
//    "workflowType": 123,
//    "whoCreated": "admin",
//    "createdAt": "27-05-2020 03:30pm",
//    "description": "this is description of the project",
//    "projectType": "software"
// }
