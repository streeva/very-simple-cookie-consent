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
  expect(getBaseDomain('https://localhost:8080')).eq('localhost')
  expect(getBaseDomain('https://example.com')).eq('.example.com')
  expect(getBaseDomain('https://www.example.com')).eq('.example.com')
  expect(getBaseDomain('https://bananas.example.com')).eq('.example.com')
  expect(getBaseDomain('https://bananas.apples.example.com')).eq('.example.com')
})
