import { Link, useLocation } from "react-router-dom";

export default function Tabs({ links }) {
  const { pathname } = useLocation();

  const isLocation = links.filter((link) => pathname.includes(link.link));
  console.log(isLocation);

  return (
    <div className="flex w-full border-b-2 border-b-neutral inset-x-0 justify-between md:justify-start self-start pt-4">
      {links.map(({ name, link }) => (
        <Link key={name} to={link}>
          <p
            className={`w-[30vw] text-center max-w-xs ${
              isLocation[0].link === link
                ? "text-green-600 border-b-2 border-b-green-600 pb-2"
                : ""
            } `}
          >
            {name}
          </p>
        </Link>
      ))}
    </div>
  );
}
