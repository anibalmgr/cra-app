import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex py-4 text-neutral-900 bg-red-200">
      <Outlet />
    </div>
  );
}
