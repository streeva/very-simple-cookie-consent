export default (
  btnId: string,
  text: string,
  btnClass: string,
  parentContainer: HTMLDivElement,
  handler: any
) => {
  const btn = document.createElement('button')
  btn.id = btnId
  btn.innerText = text
  btn.classList.add('sa-cc-bar__button', btnClass)
  btn.addEventListener('click', handler)
  parentContainer.querySelector('.sa-cc-bar__buttons')?.appendChild(btn)
  return btn
}
