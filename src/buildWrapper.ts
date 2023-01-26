export default () => {
  const wrapper = document.createElement('div')
  wrapper.id = 'sa-cc-wrapper'
  wrapper.innerHTML = `
  <div id="sa-cc" class="sa-cc-bar">
    <div class="sa-cc-bar__container">
      <div class="sa-cc-bar__notification container" role="alert">
        <div class="sa-cc-bar__text">
          <h2 class="sa-cc-bar__title">🍪 Can we use optional cookies?</h2>
          <p class="no-margin">
            These cookies help us keep our website safe and give you a better
            experience. We won’t turn them on unless you accept. Want to know more
            or adjust your preferences? Here’s our
            <a href="https://www.swiftaid.co.uk/legal/cookies/">cookie policy</a>.
          </p>
        </div>
        <div class="sa-cc-bar__actions">
          <div class="sa-cc-bar__buttons"></div>
        </div>
      </div>
    </div>
  </div>
  `
  return wrapper
}
