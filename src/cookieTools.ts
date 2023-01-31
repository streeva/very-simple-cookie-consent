import Cookies from 'js-cookie'

let cookies = Cookies

const cookieTools = {
  init: (opt: any) => {
    cookies = Cookies.withAttributes(opt || {})
    return cookieTools
  },
  hasMadeChoice: () => {
    return (
      !!cookies.get('cookies-functional') || !!cookies.get('cookies-analytics')
    )
  },
  hasConsent: () => {
    return cookies.get('cookies-analytics') === true
  },
  approve: () => {
    cookies.set('cookies-functional', true)
    cookies.set('cookies-analytics', true)
  },
  decline: () => {
    cookies.set('cookies-functional', true)
    cookies.set('cookies-analytics', false)
  },
}

export const getBaseDomain = (
  hostname: string = window.location.hostname,
  regex = /\w*\.*?(com|co.uk|net)$/gi
) => {
  if (hostname.includes('localhost')) return 'localhost'

  const match = hostname.match(regex)
  let domain = ''

  if (match) {
    domain = match[0]
  } else {
    domain = hostname
  }

  return `.${domain}`
}

export default cookieTools
