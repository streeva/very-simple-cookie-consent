import addButton from './addButton'
import wrapperHtml from './wrapperHtml'

export default (
  privacyPolicyLink: string,
  approveHandler: any,
  declineHandler: any,
  html: string = wrapperHtml
) => {
  const ccWrapper = document.createElement('div')
  ccWrapper.id = 'vs-cc-wrapper'
  ccWrapper.innerHTML = html

  const buttonsWrapper = ccWrapper.querySelector('.vs-cc-bar__buttons')

  addButton(
    buttonsWrapper,
    'Accept',
    'vs-cc-bar__button--primary',
    approveHandler,
    { tabindex: 4 }
  )

  addButton(
    buttonsWrapper,
    'Decline',
    'vs-cc-bar__button--secondary',
    declineHandler,
    { tabindex: 5 }
  )

  document.body.appendChild(ccWrapper)

  const policyLink = document.querySelector('#vs-cc-bar__policy-link')

  policyLink?.setAttribute('href', privacyPolicyLink)
  policyLink?.setAttribute('tabindex', '3')
}

export const hideBar = () => {
  document.querySelector('#vs-cc')?.classList.add('hiding')
  setTimeout(() => {
    document.querySelector('#vs-cc-wrapper')?.remove()
  }, 2000)
}
