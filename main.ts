import {
  cookieTools,
  addBar,
  hideBar,
  addGaScripts,
} from './dist/very-simple-cookie-consent'

const TAG = 'GTM-WSKPJM7'

const start = () => {
  if (!cookieTools.hasMadeChoice()) {
    // Show consent bar
    addBar(approveHandler, declineHandler)
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
