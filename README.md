# Very simple cookie consent

An early stages adaptable cookie consent bar module that provides HTML, CSS and helper methods.
It will inject a GTM script if consent is given.

## Cookies

Cookies added when consent is given are

- cookies-functional = true
- cookies-analytics = true

Cookies added when consent is not given are

- cookies-functional = true
- cookies-analytics = false

## Main functions:

Main functions are:

```ts
/**
 * Initialise and set options
 */
init({
  domain: string,
  expires: number,
  sameSite: string,
})

/**
 * Returns true or false if cookies are set.
 *
 * @returns {boolean}
 */
hasMadeChoice()

/**
 * Returns true if the user has consented or false if they've declined.
 *
 * @returns {boolean}
 */
hasConsent()

/**
 * Builds and adds bar to document
 *
 * @param {string} privacyPolicyLink sets the href of the link
 * @param approveHandler {callbackFunction} Handle if consent is given
 * @param declineHandler {callbackFunction} Handle if consent not given
 * @param {string} html An optional string can be provided of your own markup
 * @returns {void}
 */
addBar(privacyPolicyLink, approveHandler, declineHandler, html)

/**
 * Builds a script tag and adds to the bottom the head tag and
 * builds a noscript tag and adds to beginning of body tag.
 *
 * @param {string} gtmTag The GTM id i.e. GTM-ABC1234
 * @returns {void}
 */
addGaScripts(gtmTag)
```

## Example usage:

In your main page i.e. main.ts or App.vue, etc.

```js
import {
  cookieTools,
  addBar,
  hideBar,
  addGaScripts,
} from 'very-simple-cookie-consent'

// Set GTM tag
const TAG = 'GTM-123ABCD'

// Set privacy policy link
const privacyPolicyLink = 'https://www.example.co.uk/legal/cookies/'

// Set default cookie attributes
const ct = cookieTools.init({
  domain: '.example.com',
  expires: 365,
  sameSite: 'Lax',
})

const startExample = () => {
  if (!ct.hasMadeChoice()) {
    // Add consent bar
    addBar(privacyPolicyLink, approveHandler, declineHandler)
    return
  }

  if (ct.hasConsent()) {
    // load GA scripts
    addGaScripts(TAG)
    return
  }
}

/**
 * Handle when "Accept" button is clicked
 */
const approveHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  ct.approve()
  // load GA script
  addGaScripts(TAG)
}

/**
 * Handle when "Decline" buttin is clicked
 */
const declineHandler = (e: any) => {
  e.preventDefault()
  hideBar()
  ct.decline()
}

// Add this in an onload or onMount function
startExample()
```

## HTML

Generated HTML:

```html
<div id="vs-cc" class="vs-cc-bar">
  <div class="vs-cc-bar__container">
    <div class="vs-cc-bar__notification container" role="alert">
      <div class="vs-cc-bar__text">
        <h2 class="vs-cc-bar__title">🍪 Can we use optional cookies?</h2>
        <p class="no-margin">
          These cookies help us keep our website safe and give you a better
          experience. We won’t turn them on unless you accept. Want to know more
          or adjust your preferences? Here’s our
          <a
            id="vs-cc-bar__policy-link"
            href="https://www.example.com/legal/cookies/"
          >
            cookie policy
          </a>
          .
        </p>
      </div>
      <div class="vs-cc-bar__actions">
        <div class="vs-cc-bar__buttons">
          <button class="vs-cc-bar__button vs-cc-bar__button--primary">
            Accept
          </button>
          <button class="vs-cc-bar__button vs-cc-bar__button--secondary">
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

You can provide your own html if you wish by adding a string of html to the addBar method e.g.
`addBar(privacyPolicyLink, approveHandler, declineHandler, htmlString)`.

The following elements/css classes are required for it to function:

- An element with css class `vs-cc-bar__buttons` so that buttons can be injected.
- A href tag with id `vs-cc-bar__policy-link` so that privacy policy link can be added.
