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

export default function BlogPage() {
  const data = useLoaderData<typeof loader>()
  return (
    <>
      <div className="flex flex-col h-full min-h-screen">
        {/* <Navbar /> */}
        <main className="flex h-full bg-gray-50">
          {/* <Sidebar label="New Chat" items={items} /> */}
          <div className="overflow-auto flex-1 p-6 min-h-screen">
            <Outlet />
          </div>
        </main>
        {/* <Footer env={data.environment} /> */}
      </div>
    </>
  )
}
