import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isLocale, locales } from './lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/')[1] ?? ''

  if (!isLocale(segment)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
    return NextResponse.redirect(url)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', segment)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}

void locales
