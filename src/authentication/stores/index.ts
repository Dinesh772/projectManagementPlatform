import AuthStore from './AuthStore/index'
import AuthApi from '../services/AuthService/index'

const authService = new AuthApi()
const authStore = new AuthStore(authService)

export default authStore
