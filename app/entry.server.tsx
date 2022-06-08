import type { EntryContext } from '@remix-run/cloudflare'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  const headers = [
    { 'Content-Security-Policy': 'upgrade-insecure-requests' },
    { 'Strict-Transport-Security': 'max-age=7200' },
    { 'X-Xss-Protection': '1; mode=block' },
    { 'X-Frame-Options': 'DENY' },
    { 'X-Content-Type-Options': 'nosniff' },
    { 'Referrer-Policy': 'strict-origin-when-cross-origin' },
    {
      'Permissions-Policy':
        'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), microphone=(), midi=(), usb=(), conversion-measurement=(), focus-without-user-activation=(), hid=(), idle-detection=(), interest-cohort=(), serial=(), sync-script=(), trust-token-redemption=(), window-placement=(), vertical-scroll=()',
    },
  ]

  responseHeaders.set('Content-Type', 'text/html')

  /* if (process.env.NODE_ENV === 'development') {
  } */

  if (process.env.NODE_ENV === 'production') {
    responseHeaders.set(
      'Content-Security-Policy',
      "default-src 'self'  https://mozart409.com; img-src 'self' https://imagedelivery.net; style-src 'self';"
    )
    headers.map((item) => {
      return responseHeaders.set(Object.keys(item)[0], Object.values(item)[0])
    })
  }

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
