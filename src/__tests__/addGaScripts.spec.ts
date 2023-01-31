import { expect, test } from 'vitest'
import addGaScripts from '../addGaScripts'

test('addGaScripts', () => {
  const tag = 'GA-123'

  addGaScripts(tag)

  expect(document.body.toString()).toMatchSnapshot()
  expect(document.head.toString()).toMatchSnapshot()
})
