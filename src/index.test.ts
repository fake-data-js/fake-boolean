import { expect, test } from 'vitest'
import { fakeBoolean } from '@/index'

test('fakeBoolean', () => {
  expect(typeof fakeBoolean() === 'boolean').toBeTruthy()
})
