import addButton from './addButton'
import wrapperHtml from './wrapperHtml'

export default (
  privacyPolicyLink: string,
  approveHandler: any,
  declineHandler: any
) => {
  const ccWrapper = document.createElement('div')
  ccWrapper.id = 'vs-cc-wrapper'
  ccWrapper.innerHTML = wrapperHtml

  const buttonsWrapper = ccWrapper.querySelector('.vs-cc-bar__buttons')

  addButton(
    buttonsWrapper,
    'Accept',
    'vs-cc-bar__button--primary',
    approveHandler
  )

  addButton(
    buttonsWrapper,
    'Decline',
    'vs-cc-bar__button--secondary',
    declineHandler
  )

  document.body.appendChild(ccWrapper)

  document
    .querySelector('#vs-cc-bar__policy-link')
    ?.setAttribute('href', privacyPolicyLink)
}

export const hideBar = () => {
  document.querySelector('#vs-cc')?.classList.add('hiding')
  setTimeout(() => {
    document.querySelector('#vs-cc-wrapper')?.remove()
  }, 2000)
}
