import { Navigate, useLocation } from "react-router-dom";
import { useValidateAuth } from "../../hooks/useValidateAuth";

export default function RequireAuth(props) {
  let auth = useValidateAuth();
  let location = useLocation();

  console.log(auth);
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
