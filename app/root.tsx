import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from '@remix-run/react'
import { XCircleIcon } from '@heroicons/react/20/solid'
import type { LinksFunction } from '@remix-run/cloudflare'
import { cssBundleHref } from '@remix-run/css-bundle'
import styles from './app.css'

export function meta() {
  return [
    { title: 'Mozart409' },
    { description: 'Mozart409 Website' },
    { keywords: 'Mozart409, Amadeus Mader, Mozart409, Mozart409 Website' }
  ]
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
