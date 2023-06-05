import { Subject } from "rxjs"
import { useState, useLayoutEffect } from "react"
import { Token } from "../user/userService"

let currentToken: string | undefined

const tokenSubject = new Subject<string | undefined>()

export function useSessionToken() {
  const [token, setToken] = useState(currentToken)

  useLayoutEffect(() => {
    tokenSubject.subscribe((newState : string | undefined) => {
      setToken(newState)
    })
  }, [])

  return token
}

export function updateSessionToken(token: string) {
  currentToken = token
  tokenSubject.next(currentToken)
}

export function cleanupSessionToken() {
  currentToken = undefined
  tokenSubject.next(currentToken)
}
