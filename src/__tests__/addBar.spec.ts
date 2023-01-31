import { expect, test, assert } from 'vitest'
import addBar from '../addBar'

test('addBar', () => {
  const policyLink = 'https://example.com/policy-link'
  assert.equal(document.body.toString(), '<body></body>', 'empty body')

  addBar(
    policyLink,
    () => {},
    () => {}
  )

  const policyLinkEle = document.querySelector('#vs-cc-bar__policy-link')
  expect(policyLinkEle?.getAttribute('href')).eq(policyLink)

  const buttons = document.querySelectorAll('button')
  expect(buttons.length).eq(2)

  expect(document.body.toString()).toMatchSnapshot()
})
