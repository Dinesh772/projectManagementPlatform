import { cleanup } from '@testing-library/react'

import CounterStore from './index'

describe('CounterStore tests', () => {
   let counterStore
   beforeEach(() => {
      counterStore = new CounterStore()
   })

   afterEach(cleanup)

   it('should test if incrementCounter increments the count', () => {
      counterStore.incrementCounter()

      expect(counterStore.count).toBe(1)
   })

   it('should test if incrementCounter increments the count', () => {
      counterStore.decrementCounter()

      expect(counterStore.count).toBe(-1)
   })
})
