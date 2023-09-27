import type { MetaFunction } from '@remix-run/react'

export function loader() {
  return new Response('Not Found', {
    status: 404
  })
}

export const meta: MetaFunction = () => {
  return [{ title: '404 Page' }, { description: 'Error.' }]
}

export default function Page404() {
  return (
    <>
      <main className="grid place-items-center py-24 px-6 min-h-full bg-white sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10">
            <a
              href="/"
              className="py-2.5 px-3.5 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="/" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
