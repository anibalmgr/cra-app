import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const loggedIn = useAuth(true);
  if (loggedIn) return <Navigate to="/products" />;
  return <div>Login</div>;
}
