import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <div className="w-screen h-screen flex py-4">
      <Outlet />
    </div>
  );
}
