import type { MetaFunction } from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Mozart409',
  viewport: 'width=device-width,initial-scale=1',
  description: 'Mozart409 Website',
  keywords: 'Mozart409, Amadeus Mader, Mozart409, Mozart409 Website',
  /* "Content-Security-Policy"
      content="default-src 'self'; img-src https://*; child-src 'none';">
 */
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="img-src 'self' https://imagedelivery.net; style-src 'self';"
        />
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; img-src https://imagedelivery.net; child-src 'none';"
        /> */}

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
