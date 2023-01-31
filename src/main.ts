import cookieTools, { getBaseDomain } from './cookieTools'
import addBar, { hideBar } from './addBar'
import addGaScripts from './addGaScripts'
import './styles.css'

const TAG = 'GTM-1234567'
const privacyPolicyLink = 'https://www.example.co.uk/legal/cookies/'
const domain =
  window.location.hostname === 'localhost' ? 'localhost' : getBaseDomain()
const ct = cookieTools.init({
  domain,
  expires: 365,
  sameSite: 'Lax',
})

const start = () => {
  if (!ct.hasMadeChoice()) {
    // Show consent bar
    addBar(privacyPolicyLink, approveHandler, declineHandler)
    return
  }

  if (ct.hasConsent()) {
    // load GA scripts
    addGaScripts(TAG)
    return
  }
}

const approveHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  ct.approve()
  // load GA script
  addGaScripts(TAG)
}

const declineHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  ct.decline()
}

start()
