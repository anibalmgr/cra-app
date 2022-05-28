import { Navigate } from "react-router-dom";

export default function Homepage() {
  const loggedIn = true;
  if (loggedIn) return <Navigate to="/products" />;
  return <div>homepage</div>;
}
