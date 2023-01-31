import cookieTools from './cookieTools'
import addBar, { hideBar } from './addBar'
import addGaScripts from './addGaScripts'
import './styles.css'

const TAG = 'GTM-1234567'
const privacyPolicyLink = 'https://www.example.co.uk/legal/cookies/'

const start = () => {
  if (!cookieTools.hasMadeChoice()) {
    // Show consent bar
    addBar(privacyPolicyLink, approveHandler, declineHandler)
    return
  }

  if (cookieTools.hasConsent()) {
    // load GA scripts
    addGaScripts(TAG)
    return
  }
}

const approveHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  cookieTools.approve()
  // load GA script
  addGaScripts(TAG)
}

const declineHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  cookieTools.decline()
}

start()
