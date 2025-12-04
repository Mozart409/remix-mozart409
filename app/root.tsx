import { XCircleIcon } from "@heroicons/react/20/solid";

import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export function meta() {
  return [
    { title: "Mozart409" },
    { description: "Mozart409 Website" },
    { keywords: "Mozart409, Amadeus Mader, Mozart409, Mozart409 Website" },
  ];
}

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <div className="p-4 bg-red-50 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              {message} - An unexpected error occurred:
            </h3>
            <p>{details}</p>
            <div className="mt-2 text-sm text-red-700">
              {stack && (
                <pre className="overflow-x-auto p-4 w-full">
                  <code>{stack}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
