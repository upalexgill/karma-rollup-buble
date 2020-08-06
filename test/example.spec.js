import { add } from '../src/add'

describe('Add function', () => {
  it('should be able to calculate sum of 5 and 7', () => {
    expect(add(5, 7)).toEqual(12)
  })
})
