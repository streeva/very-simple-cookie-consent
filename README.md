# Very simple cookie consent

```js
import {
  cookieTools,
  addBar,
  hideBar,
  addGaScripts,
} from 'very-simple-cookie-consent'

const TAG = 'GTM-123ABCD'
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
```
