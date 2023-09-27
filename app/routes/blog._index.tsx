import { json } from '@remix-run/cloudflare'
import { Outlet, useLoaderData } from '@remix-run/react'
import type {
  LoaderFunction,
  LoaderFunctionArgs,
  LinksFunction
} from '@remix-run/cloudflare'

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  return json({})
}

export default function BlogIndexPage() {
  const data = useLoaderData<typeof loader>()
  return (
    <>
      <h1>Blog Index Page</h1>
    </>
  )
}
