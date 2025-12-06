import type { Route } from "./+types/home";

import countries from "../lib/countries.json";

import { Footer } from "~/ui/footer";
import { Navigation } from "~/ui/navigation";

export let links: Route.LinksFunction = () => {
  return [{ rel: "canonical", href: "https://mozart409.com" }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const lang = request.headers.get("cf-ipcountry");

  let country = countries.find((c) => c.cca2 === lang);

  return {
    country,
  };
};

export default function Index({ loaderData }: Route.ComponentProps) {
  const { country } = loaderData;

  return (
    <div>
      <div className="bg-white">
        <Navigation />
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
                  <p
                    data-testid="text-on-picture"
                    className="mx-auto mt-6 max-w-lg text-xl text-center text-yellow-200 sm:max-w-3xl"
                  >
                    As a full-stack developer with over 7 years of experience, complemented by 6 years in
                    SysAdmin/Infrastructure and 3 years as a Solutions Consultant, I possess a deep-seated passion for
                    efficient backends, dynamic websites, and fault-tolerant applications/databases. My primary
                    deployment platforms are AWS and Hetzner, and I leverage modern Infrastructure-as-Code solutions
                    (Terraform, Pulumi, AWS CDK) for this purpose. My technical expertise encompasses Rust, Go,
                    TypeScript, Elixir, JavaScript, and Node.js, with a particular affinity for communication via actor
                    systems, microservices, and tools like Kafka, NATS, and Protocol Buffers. I specialize in cloud
                    platforms including AWS, Azure, and OpenShift, alongside DevOps practices with Docker, Kubernetes,
                    and Terraform for scalability and Site Reliability Engineering. On the database side, I'm proficient
                    in PostgreSQL, Redis, SQL, and fault-tolerant designs. For front-end work, I use React, and I have
                    strong Linux System Administration skills, including Red Hat Enterprise Linux (RHEL). I've applied
                    Domain-Driven Design (DDD) in consulting roles as a Technical Consultant, ensuring robust, scalable
                    solutions. Notably, this page is constructed with Remix and Tailwind and is seamlessly deployed to
                    Cloudflare Workers.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:justify-center sm:max-w-none">
                    <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:mx-auto sm:space-y-0">
                      <a
                        data-testid="social-twitter"
                        href="https://twitter.com/marc_van_sax"
                        className="flex justify-center items-center py-3 px-4 text-base font-medium text-yellow-600 bg-white rounded-md border border-transparent shadow-sm sm:px-8 hover:bg-yellow-50"
                      >
                        <span>Twitter / X</span>
                      </a>
                      <a
                        href="https://github.com/mozart409"
                        data-testid="social-github"
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

          {country
            ? (
              <div className="bg-gray-100">
                <div className="py-16 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
                  <div className="overflow-hidden bg-white rounded-lg divide-y divide-gray-200 shadow">
                    <div className="py-5 px-4 sm:px-6">
                      {/* Content goes here */}
                      {/* We use less vertical padding on card headers on desktop than on body sections */}
                      You are visiting this website from {country.flag}
                    </div>
                    {
                      /*  <div className="py-5 px-4 sm:p-6">
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
                  </div> */
                    }
                  </div>
                </div>
              </div>
            )
            : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}
