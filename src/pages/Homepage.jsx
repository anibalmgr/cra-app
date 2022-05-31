import { Link, Navigate } from "react-router-dom";
import Button from "../components/shared/Button";
import LogoItem from "../components/shared/LogoItem";

export default function Homepage() {
  const loggedIn = false;
  if (loggedIn) return <Navigate to="/products" />;
  return (
    <div className="h-full w-full flex flex-col justify-between pt-12 pb-8 sm:py-12 items-center max-h-[750px] gap-2">
      <div className="text-center">
        <LogoItem />
      </div>
      <div className="text-center flex flex-col gap-3 sm:gap-6 px-3">
        <p className="text-xl sm:text-3xl">
          Connect to all your Domin products
          <p className="text-sm sm:text-lg pt-1 sm:pt-4">
            Configure and access data from your devices remotely, in a secure
            manner
          </p>
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 items-center pb-24">
        <Link to="/register">
          <Button>Get started</Button>
        </Link>
        <Link to="/login">
          <Button secondary>Log In</Button>
        </Link>
      </div>
    </div>
  );
}
