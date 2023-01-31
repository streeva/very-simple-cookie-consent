import { test, assert, expect } from 'vitest'
import cookieTools, { getBaseDomain } from '../cookieTools'

test('cookieTools.hasMadeChoice()', () => {
  cookieTools.hasMadeChoice()

  assert.equal(cookieTools.hasMadeChoice(), false, 'no cookies are set')
})

test('cookieTools.hasConsent()', () => {
  cookieTools.hasConsent()

  assert.equal(cookieTools.hasConsent(), false, 'no cookies are set')
})

test('getBaseDomain', () => {
  expect(getBaseDomain('localhost:8080')).eq('localhost')
  expect(getBaseDomain('example.com')).eq('.example.com')
  expect(getBaseDomain('www.example.com')).eq('.example.com')
  expect(getBaseDomain('bananas.example.com')).eq('.example.com')
  expect(getBaseDomain('bananas.apples.example.com')).eq('.example.com')
  expect(getBaseDomain('something-test-test-example.onrender.com')).eq(
    'something-test-test-example.onrender.com'
  )
})
