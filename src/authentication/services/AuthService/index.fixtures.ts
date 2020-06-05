import authData from '../../fixtures/signInFixtures.json'
class AuthFixtures {
   signInAPI = requestObject => {
      return new Promise((resolve, reject) => {
         resolve(authData)
      })
   }
}
export default AuthFixtures
