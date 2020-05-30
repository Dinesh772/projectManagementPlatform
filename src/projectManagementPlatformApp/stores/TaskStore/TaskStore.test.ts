import { TaskStore } from './TaskStore'
import taskData from '../../fixtures/taskFixtures.json'

import TasksFixturesAPI from '../../services/TaskService/index.fixtures'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'

describe('TaskStore tests', () => {
   let taskStore
   let taskService
   beforeEach(() => {
      taskService = new TasksFixturesAPI()
      taskStore = new TaskStore(taskService)
   })
   it('should test all initial values', () => {
      expect(taskStore.tasksList).toEqual([])
      expect(taskStore.tasksAPIStatus).toBe(API_INITIAL)
      expect(taskStore.createTaskAPIStatus).toBe(API_INITIAL)
      expect(taskStore.createTaskAPIError).toBeNull()
      expect(taskStore.tasksAPIError).toBeNull()
      expect(taskStore.tasksLimitPerPage).toBe(10)
      expect(taskStore.totalTasks).toBe(0)
      expect(taskStore.totalPaginationLimit).toBe(0)
      expect(taskStore.currentPageNumber).toBe(1)
      expect(taskStore.workflows).toEqual([])
   })
   it('should test getTasksAPI fetching status', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.getTasksAPI = mockTasksAPI
      taskStore.getTasksAPI()
      expect(taskStore.tasksAPIStatus).toBe(API_FETCHING)
   })
   it('should test createTaskAPI fetching', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockCreateTasksAPI = jest.fn()
      mockCreateTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.createTaskAPI = mockCreateTasksAPI
      taskService.getTasksAPI(mockCreateTasksAPI)
      taskStore.createTaskAPI(mockObject, onSuccess, onFailure)
      expect(taskStore.createTaskAPIStatus).toBe(API_FETCHING)
   })
   it('should test getTasksAPI success status', async () => {
      const mockLoadingPromise = Promise.resolve(taskData)
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      expect(taskStore.tasksAPIStatus).toBe(API_SUCCESS)
   })
   it('should test createTaskAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockObject = {}
      const mockLoadingPromise = Promise.resolve(taskData)
      const mockCreateTasksAPI = jest.fn()
      mockCreateTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.createTaskAPI = mockCreateTasksAPI
      taskService.getTasksAPI(mockCreateTasksAPI)
      await taskStore.createTaskAPI(mockObject, onSuccess, onFailure)
      expect(taskStore.createTaskAPIStatus).toBe(API_SUCCESS)
   })
   it('should test createTaskAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockObject = {}
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockCreateTasksAPI = jest.fn()
      mockCreateTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.createTaskAPI = mockCreateTasksAPI
      taskService.getTasksAPI(mockCreateTasksAPI)
      await taskStore.createTaskAPI(mockObject, onSuccess, onFailure)
      expect(taskStore.createTaskAPIStatus).toBe(API_FAILED)
   })
   it('should test getTasksAPI failure status', async () => {
      const mockLoadingPromise = Promise.reject(new Error('error'))
      const mockTasksAPI = jest.fn()
      mockTasksAPI.mockReturnValue(mockLoadingPromise)
      taskService.getTasksAPI = mockTasksAPI
      await taskStore.getTasksAPI()
      expect(taskStore.tasksAPIStatus).toBe(API_FAILED)
   })
   it('should test clearStore', () => {
      taskStore.clearStore()
      expect(taskStore.tasksList).toEqual([])
      expect(taskStore.tasksAPIStatus).toBe(API_INITIAL)
      expect(taskStore.createTaskAPIStatus).toBe(API_INITIAL)
      expect(taskStore.createTaskAPIError).toBeNull()
      expect(taskStore.tasksAPIError).toBeNull()
      expect(taskStore.tasksLimitPerPage).toBe(10)
      expect(taskStore.totalTasks).toBe(0)
      expect(taskStore.totalPaginationLimit).toBe(0)
      expect(taskStore.currentPageNumber).toBe(1)
      expect(taskStore.workflows).toEqual([])
   })
})
