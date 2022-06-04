import { Link, Outlet, useLocation } from "react-router-dom";
import Icon from "../components/shared/Icon";
import { ReactComponent as Logomark } from "../assets/images/logomark.svg";

const links = [
  { to: "products", icon: "dashboard" },
  { to: "charts", icon: "chart" },
  { to: "notifications", icon: "notification" },
  { to: "settings", icon: "settings" },
];

export default function Dashboard() {
  const { pathname } = useLocation();

  function isActive(link) {
    const isActive = link === pathname;
    return isActive;
  }

  return (
    <div className="w-full h-full">
      <Outlet />
      <footer className="fixed bg-neutral-0 bottom-0 right-0 left-0 md:top-0 md:right-auto w-screen md:w-20 md:h-screen border-t-2 md:border-t-0 md:border-r-2 border-x-neutral-500 h-20 flex justify-center">
        <div className="h-full w-full max-w-lg flex md:flex-col px-8 py-4 md:px-4 md:py-6 md:gap-12 justify-between md:justify-start md:content-center md:items-center">
          <Logomark className="w-10 h-10 hidden md:block" />
          {links.map((link, i) => (
            <Link key={i} to={`/${link.to}`}>
              <Icon
                name={link.icon}
                className={`flex h-7
               stroke-neutral-500 stroke-2 hover:stroke-neutral-300 ${
                 isActive(`/dashboard${link.to}`)
                   ? "stroke-green-600 hover:stroke--green-500"
                   : ""
               }`}
              />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
