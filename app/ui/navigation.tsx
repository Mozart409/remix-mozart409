import { NavLink } from "react-router";
import { Link } from "react-router";

export const Navigation: React.FC = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center py-6 px-4 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:flex-1 lg:w-0">
            <Link to="/">
              <span className="sr-only">Mozart409</span>
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
            </Link>
          </div>

          <div className="hidden justify-center items-center md:flex md:flex-1 lg:w-0">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-teal-400 hover:text-teal-700"
                  : ""}
            >
              <span className="text-base font-medium whitespace-nowrap ">
                Home
              </span>
            </NavLink>
          </div>

          <div className="justify-end items-center flex flex-1 lg:w-0">
            <a
              href="mailto:website@mozart409.com"
              className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              <span>Email me</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
