import cookieConsentTools from 'cookie-consent-tools'
import addBar from './addBar'
import addGaScripts from './addGaScripts'
import './style.css'

const cct = cookieConsentTools

cct.initialize({
  consentBox: {
    autoDisplay: false,
  },
})

const start = () => {
  if (!cct.cookieManager.hasMadeChoice()) {
    // Show consent bar
    addBar(cct)
    return
  }

  if (cct.cookieManager.hasConsent()) {
    // load GA scripts
    addGaScripts()
    return
  }
}

start()
