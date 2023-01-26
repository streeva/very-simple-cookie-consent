import buildButton from './buildButton'
import buildWrapper from './buildWrapper'
import addGaScripts from './addGaScripts'

const hideBar = () => {
  document.querySelector('#sa-cc')?.classList.add('hiding')
  setTimeout(() => {
    document.querySelector('#sa-cc-wrapper')?.remove()
  }, 2000)
}

export default (cct: {
  cookieManager: { approve: () => void; decline: () => void }
}) => {
  const ccWrapper = buildWrapper()
  const btnsContainer = ccWrapper.querySelector('.sa-cc-bar__buttons')

  const approveHandler = (e: any) => {
    e.preventDefault()
    hideBar()
    console.log('Accept clicked')
    cct.cookieManager.approve()
    // load GA script
    addGaScripts()
  }

  const declineHandler = (e: any) => {
    e.preventDefault()
    hideBar()
    console.log('Decline clicked')
    cct.cookieManager.decline()
  }

  btnsContainer?.appendChild(
    buildButton(
      'cookie-notification__accept',
      'Accept',
      'sa-cc-bar__button--primary',
      ccWrapper,
      approveHandler
    )
  )

  btnsContainer?.appendChild(
    buildButton(
      'cookie-notification__decline',
      'Decline',
      'sa-cc-bar__button--secondary',
      ccWrapper,
      declineHandler
    )
  )

  document.body.appendChild(ccWrapper)
}
