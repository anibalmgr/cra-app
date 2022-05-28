import { Link, Navigate } from "react-router-dom";
import Button from "../components/shared/Button";

export default function Homepage() {
  const loggedIn = false;
  if (loggedIn) return <Navigate to="/products" />;
  return (
    <div className="h-full w-full flex flex-col justify-between py-16 sm:py-32 items-center">
      <div className="text-center">
        <img src="logomark.png" alt="" />
        <p className="text-4xl md:text-7xl font-bold">DOMIN</p>
        <p className="sm:text-3xl">Ascend</p>
      </div>
      <div className="text-center flex flex-col gap-3 sm:gap-6 px-4">
        <p className="text-xl md:text-3xl">
          Connect to all your Domin products
        </p>
        <p className="text-sm sm:text-lg">
          Configure and access data from your devices remotely, in a secure
          manner
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 items-center pb-24 sm:pb-40">
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
