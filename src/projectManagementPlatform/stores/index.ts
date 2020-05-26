import { AuthStore } from '../../authentication/stores/AuthStore/AuthStore'
import AuthApi from '../../authentication/services/AuthService/index'

const authApi = new AuthApi()
const authStore = new AuthStore(authApi)
export default { authStore }
