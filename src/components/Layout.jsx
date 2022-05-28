import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
}
