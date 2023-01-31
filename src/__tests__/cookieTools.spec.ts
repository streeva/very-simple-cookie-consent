import { test, assert } from 'vitest'
import cookieTools from '../cookieTools'

test('cookieTools.hasMadeChoice()', () => {
  cookieTools.hasMadeChoice()

  assert.equal(cookieTools.hasMadeChoice(), false, 'no cookies are set')
})

test('cookieTools.hasConsent()', () => {
  cookieTools.hasConsent()

  assert.equal(cookieTools.hasConsent(), false, 'no cookies are set')
})
