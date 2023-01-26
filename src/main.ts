import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#sa-cc-wrapper')!.innerHTML = `
<div
  id="sa-cc"
  class="sa-cc-bar"
>
  <div class="sa-cc-bar__container">
    <div class="sa-cc-bar__notification container" role="alert">
      <div class="sa-cc-bar__text">
        <h2 class="sa-cc-bar__title">🍪 Can we use optional cookies?</h2>
        <p class="no-margin">
          These cookies help us keep our website safe and give you a better
          experience. We won’t turn them on unless you accept. Want to know more
          or adjust your preferences? Here’s our
          <a href="/legal/cookies/">cookie policy</a>.
        </p>
      </div>
      <div class="sa-cc-bar__actions">
        <div class="sa-cc-bar__buttons">
          <button
            id="cookie-notification__accept"
            class="sa-cc-bar__button sa-cc-bar__button--primary"
          >
            Accept
          </button>
          <button
            id="cookie-notification__decline"
            class="sa-cc-bar__button sa-cc-bar__button--secondary"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
