import { ProjectStore } from './ProjectStore'
import ProjectsFixtureService from '../../services/ProjectsService/index.fixtures'
import workflowData from '../../fixtures/workflowFixtures.json'

import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import projectsData from '../../fixtures/projectFixtures.json'
import { waitFor } from '@testing-library/react'
describe('ProjectStore testing', () => {
   let projectStore
   let projectService
   beforeEach(() => {
      projectService = new ProjectsFixtureService()
      projectStore = new ProjectStore(projectService)
   })
   it('should test all initial values in the projectStore', () => {
      expect(projectStore.productsList).toBeUndefined()
      expect(projectStore.projectsAPIStatus).toBe(API_INITIAL)
      expect(projectStore.workflowsAPIStatus).toBe(API_INITIAL)
      expect(projectStore.createProjectAPIStatus).toBe(API_INITIAL)
      expect(projectStore.projectsAPIError).toBeNull()
      expect(projectStore.workflowsAPIError).toBeNull()
      expect(projectStore.workflowsAPIError).toBeNull()
      expect(projectStore.totalProjects).toBe(0)
      expect(projectStore.totalPaginationLimit).toBe(0)
      expect(projectStore.currentPageNumber).toBe(1)
   })
   it('should test projectStoreAPI fetching status', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockLoadingPromise)
      projectService.getProjectsAPI = mockProjectsAPI
      projectStore.getProjectsAPI()
      expect(projectStore.projectsAPIStatus).toBe(API_FETCHING)
   })
   it('should test createProject API fetching Status', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockCreateProjectsAPI = jest.fn()
      mockCreateProjectsAPI.mockReturnValue(mockLoadingPromise)
      projectService.createProjectAPI = mockCreateProjectsAPI
      projectStore.createProjectAPI()
      expect(projectStore.createProjectAPIStatus).toBe(API_FETCHING)
   })
   it('should test workflow API fetching Status', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockCreateProjectsAPI = jest.fn()
      mockCreateProjectsAPI.mockReturnValue(mockLoadingPromise)
      projectService.getWorkflowsAPI = mockCreateProjectsAPI
      projectStore.getWorkflowsAPI()
      expect(projectStore.workflowsAPIStatus).toBe(API_FETCHING)
   })
   it('should test projectStoreAPI success status', async () => {
      const mockSuccessPromise = Promise.resolve(projectsData)
      const mockProjectsAPI = jest.fn()
      mockProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.productsAPI = mockProjectsAPI

      await projectStore.getProjectsAPI()
      expect(projectStore.projectsAPIStatus).toBe(API_SUCCESS)
      expect(projectStore.productsList).not.toEqual([])
   })

   it('should test workflow API success Status', async () => {
      const mockSuccessPromise = Promise.resolve(workflowData)
      const mockWorkflowProjectsAPI = jest.fn()
      mockWorkflowProjectsAPI.mockReturnValue(mockSuccessPromise)
      projectService.getWorkflowsAPI = mockWorkflowProjectsAPI
      await projectStore.getWorkflowsAPI()
      expect(projectStore.workflowsAPIStatus).toBe(API_SUCCESS)
   })

   it('should test clear store ', () => {
      projectStore.clearStore()
      expect(projectStore.productsList).toBeUndefined()
      expect(projectStore.projectsAPIStatus).toBe(API_INITIAL)
      expect(projectStore.workflowsAPIStatus).toBe(API_INITIAL)
      expect(projectStore.createProjectAPIStatus).toBe(API_INITIAL)
      expect(projectStore.projectsAPIError).toBeNull()
      expect(projectStore.workflowsAPIError).toBeNull()
      expect(projectStore.workflowsAPIError).toBeNull()
      expect(projectStore.totalProjects).toBe(0)
      expect(projectStore.totalPaginationLimit).toBe(0)
      expect(projectStore.currentPageNumber).toBe(1)
   })
})
