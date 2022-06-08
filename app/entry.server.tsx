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

  responseHeaders.set('Content-Type', 'text/html')

  /* if (process.env.NODE_ENV === 'development') {
  } */

  if (process.env.NODE_ENV === 'production') {
    responseHeaders.set(
      'Content-Security-Policy',
      "default-src 'self'; img-src 'self' https://imagedelivery.net; style-src 'self';"
    )
  }

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
