export const PROJECT_MANAGEMENT_PLATFORM_LOGIN =
   '/project-management-platform/login'
export const PROJECT_MANAGEMENT_PLATFORM_SIGNUP =
   '/project-management-platform/sign-up'
export const PROJECT_MANAGEMENT_PLATFORM_DASHBOARD =
   '/project-management-platform/dashboard'
export const PROJECT_MANAGEMENT_PLATFORM_CREATE =
   '/project-management-platform/dashboard/creaate-project'
export const PROJECT_MANAGEMENT_PLATFORM_PROJECTS =
   '/project-management-platform/dashboard/project'
export const PROJECT_MANAGEMENT_PLATFORM_TASKS =
   '/project-management-platform/dashboard/project/tasks/:id'
export const BASE_URL =
   'https://2a3a7dfc77f6.ngrok.io/api/project_management_portal'
const envVariables = process.env

const Config = {}

Object.keys(envVariables).forEach(variable => {
   if (variable.includes('REACT_APP')) {
      const envKey = variable.replace('REACT_APP_', '')
      Config[envKey] = envVariables[variable]
   }
})
export default Config
