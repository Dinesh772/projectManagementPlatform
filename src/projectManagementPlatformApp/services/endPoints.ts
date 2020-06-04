const endPoints = {
   projects: '/projects/v1/',
   createProject: '/project/v1/',
   createTask: '/task/v1/',
   tasks: '/project/tasks/{project_id}/v1/',
   createTransition: '/transition/v1/',
   workflows: '/workflows/v1/',
   getStatesBasedOnTask: '/states/{task_id}/v1/',
   checklist: '/transition/{task_id}/v1/'
}
export default endPoints
