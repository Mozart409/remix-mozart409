import { Popover } from "@headlessui/react";
import type { Route } from "./+types/home";

import countries from "../lib/countries.json";

import { Footer } from "~/ui/footer";
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export let links: Route.LinksFunction = () => {
  return [{ rel: "canonical", href: "https://mozart409.com" }];
};

/* export const loader: LoaderFunction = ({ request }) => {
  const lang = request.headers.get("cf-ipcountry");

  let country = countries.find((c) => c.cca2 === lang);

  return json({
    country,
  });
}; */

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const lang = request.headers.get("cf-ipcountry");

  let country = countries.find((c) => c.cca2 === lang);

  return {
    country,
  };
};

export default function Index() {
  const { country } = loaderData<typeof loader>();

  return (
    <div>
      <div className="bg-white">
        <header>
          <Popover className="relative bg-white">
            <div className="flex justify-between items-center py-6 px-4 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:flex-1 lg:w-0">
                <span className="sr-only">Mozart409</span>
                {/*  <img
                  className="w-auto h-8 sm:h-10"
                  src="/logo.svg"
                  alt="Mozart409 Logo"
                  width={32}
                  height={32}
                /> */}
                <div>
                  <svg
                    className="w-auto h-8 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2000"
                    height="2000"
                    viewBox="0 0 1500 1500"
                    version="1.2"
                  >
                    <path d="M753.184 433.595L1.999 1483.705l9.71 13.486L753.143 460.734l735.126 1036.434 9.757-13.432z" />
                    <path d="M10.137 1498.84l-6.564-16.772 655.916-497.603 494.87 498.243-8.033 15.491-487.861-491.212zm0 0" />
                    <path d="M1489.355 1498.409l-740.11-685.546-424.03 245.02-5.256-17.657 430.796-248.922 3.04 2.832 743.14 688.36zm0 0" />
                    <path d="M756.373 798.585l-12.747 7.001 112.397 398.454 12.75-7.001z" />
                    <path d="M13.71 1480.896h1472.58V19.104H13.71zM1500 1500H0V0h1500zm0 0" />
                  </svg>
                </div>
              </div>

              <div className="hidden justify-end items-center md:flex md:flex-1 lg:w-0">
                <span className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">
                  Amadeus Mader
                </span>
                {/*  <a
                  href="#"
                  className="inline-flex justify-center items-center py-2 px-4 ml-8 text-base font-medium text-white whitespace-nowrap bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md border border-transparent shadow-sm hover:from-pink-700 hover:to-yellow-600 bg-origin-border"
                >
                  Sign up
                </a> */}
              </div>
            </div>
          </Popover>
        </header>

        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1561056731-62ffd605f586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                    width={"1366"}
                    height={"768"}
                    alt="Munich Background"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-800 to-yellow-600 mix-blend-multiply" />
                </div>
                <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
                  <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Welcome to my</span>
                    <span className="block text-yellow-200">website</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-xl text-center text-yellow-200 sm:max-w-3xl">
                    As a full-stack developer, I possess a deep-seated passion
                    for crafting dynamic websites and serverless applications.
                    My primary deployment platform is AWS, and I leverage the
                    Cloud Development Kit (CDK) for this purpose. My technical
                    expertise encompasses React, Node, and Go, and I hold a
                    particular affinity for the{" "}
                    <a
                      target="_blank"
                      href="https://strapi.io"
                      rel="noreferrer"
                      className="underline"
                    >
                      Strapi
                    </a>{" "}
                    CMS. Notably, this page is constructed with Remix and
                    Tailwind and is seamlessly deployed to Cloudflare Workers.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:justify-center sm:max-w-none">
                    <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:mx-auto sm:space-y-0">
                      <a
                        href="https://twitter.com/marc_van_sax"
                        className="flex justify-center items-center py-3 px-4 text-base font-medium text-yellow-600 bg-white rounded-md border border-transparent shadow-sm sm:px-8 hover:bg-yellow-50"
                      >
                        <span>Twitter</span>
                      </a>
                      <a
                        href="https://github.com/mozart409"
                        className="flex justify-center items-center py-3 px-4 text-base font-medium text-white bg-yellow-500 bg-opacity-60 rounded-md border border-transparent shadow-sm sm:px-8 hover:bg-opacity-70"
                      >
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {country ? (
            <div className="bg-gray-100">
              <div className="py-16 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white rounded-lg divide-y divide-gray-200 shadow">
                  <div className="py-5 px-4 sm:px-6">
                    {/* Content goes here */}
                    {/* We use less vertical padding on card headers on desktop than on body sections */}
                    You are visiting this website from {country.flag}
                  </div>
                  {/*  <div className="py-5 px-4 sm:p-6">
                    <p>Location: {country.flag}</p>
                   
                    <p>Currencies</p>
                    <ul>
                      {Object.entries(country.currencies).map(
                        ([abbr, currency]: any) => (
                          <li key={abbr} className="list-disc list">
                            {abbr}: {currency.name} ({currency.symbol})
                          </li>
                        )
                      )}
                    </ul>
                    <p>Languages</p>
                    <ul>
                      {Object.values(country.languages).map((name: any) => (
                        <li key={name} className="list-disc list">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          ) : null}

          {/* Logo Cloud */}
          {/*  <div className="bg-gray-100">
            <div className="py-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
                Trusted by over 5 very average small businesses
              </p>
              <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
                <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="flex col-span-1 justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="flex col-span-1 justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="flex col-span-2 justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Alternating Feature Sections */}
          {/*  <div className="overflow-hidden relative pt-16 pb-32">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
                <div className="px-4 mx-auto max-w-xl sm:px-6 lg:py-16 lg:px-0 lg:mx-0 lg:max-w-none">
                  <div>
                    <div>
                      <span className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md">
                        <InboxIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Stay on top of customer support
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Semper curabitur ullamcorper posuere nunc sed. Ornare
                        iaculis bibendum malesuada faucibus lacinia porttitor.
                        Pulvinar laoreet sagittis viverra duis. In venenatis sem
                        arcu pretium pharetra at. Lectus viverra dui tellus
                        ornare pharetra.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex py-2 px-4 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md border border-transparent shadow-sm hover:from-pink-700 hover:to-yellow-600 bg-origin-border"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-gray-200">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;Cras velit quis eros eget rhoncus lacus
                          ultrices sed diam. Sit orci risus aenean curabitur
                          donec aliquet. Mi venenatis in euismod ut.&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Marcia Hill, Digital Marketing Manager
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:relative lg:px-0 lg:m-0 lg:h-full">
                    <img
                      className="w-full rounded-xl ring-1 ring-black ring-opacity-5 shadow-xl lg:absolute lg:left-0 lg:w-auto lg:max-w-none lg:h-full"
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8 lg:mx-auto lg:max-w-7xl">
                <div className="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:py-32 lg:px-0 lg:mx-0 lg:max-w-none">
                  <div>
                    <div>
                      <span className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md">
                        <SparklesIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Better understand your customers
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Semper curabitur ullamcorper posuere nunc sed. Ornare
                        iaculis bibendum malesuada faucibus lacinia porttitor.
                        Pulvinar laoreet sagittis viverra duis. In venenatis sem
                        arcu pretium pharetra at. Lectus viverra dui tellus
                        ornare pharetra.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex py-2 px-4 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md border border-transparent shadow-sm hover:from-pink-700 hover:to-yellow-600 bg-origin-border"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:px-0 lg:m-0 lg:h-full">
                    <img
                      className="w-full rounded-xl ring-1 ring-black ring-opacity-5 shadow-xl lg:absolute lg:right-0 lg:w-auto lg:max-w-none lg:h-full"
                      src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Gradient Feature Section */}
          {/*  <div className="bg-gradient-to-r from-pink-800 to-yellow-600">
            <div className="py-16 px-4 mx-auto max-w-4xl sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:max-w-7xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Inbox support built for efficiency
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-pink-200">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod
                mattis in.
              </p>
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 lg:mt-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-md">
                        <feature.icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-pink-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Stats section */}
          {/* <div className="relative bg-gray-900">
            <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
              <div className="w-full h-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="object-cover w-full h-full opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:w-32 xl:h-full xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
                     </div> */}

          {/* CTA Section */}
          {/*   <div className="bg-white">
            <div className="py-16 px-4 mx-auto max-w-4xl sm:py-24 sm:px-6 lg:flex lg:justify-between lg:items-center lg:px-8 lg:max-w-7xl">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block pb-1 -mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-500">
                  Get in touch or create an account.
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                <a
                  href="#"
                  className="flex justify-center items-center py-3 px-4 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-yellow-500 rounded-md border border-transparent shadow-sm hover:from-pink-700 hover:to-yellow-600 bg-origin-border"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center py-3 px-4 text-base font-medium text-yellow-600 bg-yellow-50 rounded-md border border-transparent shadow-sm hover:bg-yellow-100"
                >
                  Get started
                </a>
              </div>
            </div>
          </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
