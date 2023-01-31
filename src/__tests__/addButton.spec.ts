import { expect, test } from 'vitest'
import addButton from '../addButton'

test('addButton', () => {
  const parentContainer = document.createElement('div')
  const btnInnerText = 'Example'
  const btnCssClass = 'btn-example-class'
  const callbackFunction = () => {}

  const btn = addButton(
    parentContainer,
    btnInnerText,
    btnCssClass,
    callbackFunction
  )
  expect(btn.innerText).toEqual(btnInnerText)
  expect(btn.classList.contains(btnCssClass)).toBeTruthy()
  expect(parentContainer.toString()).toMatchSnapshot()
})
