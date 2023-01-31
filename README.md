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

// Determine whether localhost or normal domain such as example.com and
// if so domain = .example.com
const domain =
  window.location.hostname === 'localhost' ? 'localhost' : getBaseDomain()

// Set cookie attribute defaults with the following
const ct = cookieTools.init({ domain: getBaseDomain() })

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
