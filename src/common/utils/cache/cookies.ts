// 统一处理 Cookie

import { CacheKey } from "@@/constants/cache-key"
import Cookies from "js-cookie"

export function getToken() {
  return Cookies.get(CacheKey.TOKEN)
}

export function setToken(token: string) {
  Cookies.set(CacheKey.TOKEN, token)
}

export function removeToken() {
  Cookies.remove(CacheKey.TOKEN)
}

export function setUsername(username: string) {
  return Cookies.set("username", username, { expires: 30 })
}
export function setPassword(password: string) {
  return Cookies.set("password", password, { expires: 30 })
}
