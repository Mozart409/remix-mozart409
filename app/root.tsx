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
import styles from './styles/app.css'
import type { LinksFunction } from '@remix-run/cloudflare'
import { cssBundleHref } from '@remix-run/css-bundle'

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

export function ErrorBoundary() {
  const error = useRouteError()

  if (error instanceof Error) {
    return (
      <div className="p-4 bg-red-50 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              An unexpected error occurred:
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="pl-5 space-y-1 list-disc">
                <li>{error.message}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isRouteErrorResponse(error)) {
    return (
      <div className="p-4 bg-red-50 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              An unexpected error occurred:
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="pl-5 space-y-1 list-disc">
                <li>Unknown Error</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error.status === 404) {
    return (
      <div className="p-4 bg-red-50 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              An unexpected error occurred:
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="pl-5 space-y-1 list-disc">
                <li>Chat not found</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 bg-red-50 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            An unexpected error occurred:
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="pl-5 space-y-1 list-disc">
              <li>{error.statusText}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
