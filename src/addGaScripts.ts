export default (tag: string) => {
  addHeadScript(tag)
  addBodyNoscript(tag)
}

const addHeadScript = (tag: string) => {
  if (document.querySelector('#vs-cc-script')) return

  const script = document.createElement('script')
  script.id = 'vs-cc-script'
  script.innerHTML = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${tag}');
  `

  document.head.appendChild(script)
}

const addBodyNoscript = (tag: string) => {
  if (document.querySelector('#vs-cc-noscript')) return

  const noscript = document.createElement('noscript')
  noscript.id = 'vs-cc-noscript'
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${tag}`
  iframe.width = '0'
  iframe.height = '0'
  iframe.setAttribute('style', 'display:none;visibility:hidden')
  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstChild)
}
