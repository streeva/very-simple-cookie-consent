import Cookies from 'js-cookie'

export default {
  hasMadeChoice: () => {
    return (
      !!Cookies.get('cookies-functional') || !!Cookies.get('cookies-analytics')
    )
  },
  hasConsent: () => {
    return Cookies.get('cookies-analytics') === true
  },
  approve: () => {
    Cookies.set('cookies-functional', true, { expires: 365, sameSite: 'Lax' })
    Cookies.set('cookies-analytics', true, { expires: 365, sameSite: 'Lax' })
  },
  decline: () => {
    Cookies.set('cookies-functional', true, { expires: 365, sameSite: 'Lax' })
    Cookies.set('cookies-analytics', false, { expires: 365, sameSite: 'Lax' })
  },
}
