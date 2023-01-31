# Very simple cookie consent

```js
import {
  cookieTools,
  addBar,
  hideBar,
  addGaScripts,
  getBaseDomain,
} from 'very-simple-cookie-consent'

// Set GTM tag
const TAG = 'GTM-123ABCD'

// Set privacy policy link
const privacyPolicyLink = 'https://www.example.co.uk/legal/cookies/'

// Set cookie attribute defaults with the following
const ct = cookieTools.init({
  domain: getBaseDomain(),
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
```
