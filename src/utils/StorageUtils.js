import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'dG6EABne5a'

export function getCookie(key) {
  return Cookie.get(key)
}

function setCookie(key, value) {
  Cookie.set(key, value, {
    expires: 30,
    path: '/',
  })
}

export function getAccessToken() {
  return getCookie(ACCESS_TOKEN)
}
export function setAccessToken(accessToken) {
  setCookie(ACCESS_TOKEN, accessToken)
}

export function clearUserSession() {
  Cookie.remove(ACCESS_TOKEN, { path: '/' })
}
