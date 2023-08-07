export default (
  parentContainer: Element | null,
  text: string,
  btnClass: string,
  handler: any,
  attributes: any = {}
) => {
  const btn = document.createElement('button')

  btn.innerText = text

  btn.classList.add('vs-cc-bar__button', btnClass)

  btn.addEventListener('click', handler)

  for (const [key, value] of Object.entries(attributes)) {
    btn.setAttribute(key, `${value}`)
  }

  parentContainer?.appendChild(btn)

  return btn
}
