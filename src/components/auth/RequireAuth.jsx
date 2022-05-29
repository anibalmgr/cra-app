import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth(props) {
  let auth = true;
  let location = useLocation();

  if (auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
