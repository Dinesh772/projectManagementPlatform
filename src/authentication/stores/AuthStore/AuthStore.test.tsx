import Cookie from 'js-cookie'
import { AuthStore } from './AuthStore'
import AuthApi from '../../services/AuthService'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import signInFixtures from '../../fixtures/signInFixtures.json'

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('Auth Store tests', () => {
   let authApi
   let authStore
   beforeEach(() => {
      authApi = new AuthApi()
      authStore = new AuthStore(authApi)
   })
   it('should test initial values of authStore', () => {
      expect(authStore.getSignInApiStatus).toBe(API_INITIAL)
      expect(authStore.getSignInError).toBeNull()
      expect(authStore.access_token).toBeUndefined()
   })

   it('should test user signin fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)

      authApi.signInAPI = mockSignInAPI
      authStore.getSignInAPI(requestObject, onSuccess, onFailure)
      expect(authStore.getSignInApiStatus).toBe(API_FETCHING)
   })

   it('should test onSuccess state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }
      const mockSuccessPromise = Promise.resolve(signInFixtures)
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authApi.signInAPI = mockSignInAPI

      await authStore.getSignInAPI(requestObject, onSuccess, onFailure)
      expect(authStore.getSignInApiStatus).toBe(API_SUCCESS)
      expect(mockSetCookie).toBeCalled()
      expect(onSuccess).toBeCalled()
   })

   it('should test onFailure  state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }
      jest
         .spyOn(authApi, 'signInAPI')
         .mockImplementation(() => Promise.reject())

      authStore = new AuthStore(authApi)
      await authStore.getSignInAPI(requestObject, onSuccess, onFailure)
      expect(authStore.getSignInApiStatus).toBe(API_FAILED)
      expect(onFailure).toBeCalled()
   })
   it('should test clear store ', () => {
      authStore.clearStore()
      expect(authStore.getSignInApiStatus).toBe(API_INITIAL)
      expect(authStore.getSignInError).toBe(null)
   })
   it('should test clearUserSession method', () => {
      authStore.clearUserSession()
      expect(authStore.getSignInApiStatus).toBe(API_INITIAL)
      expect(authStore.getSignInError).toBe(null)
   })
})
