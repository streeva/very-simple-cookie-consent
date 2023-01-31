export default (
  parentContainer: Element | null,
  text: string,
  btnClass: string,
  handler: any
) => {
  const btn = document.createElement('button')

  btn.innerText = text

  btn.classList.add('vs-cc-bar__button', btnClass)

  btn.addEventListener('click', handler)

  parentContainer?.appendChild(btn)

  return btn
}
