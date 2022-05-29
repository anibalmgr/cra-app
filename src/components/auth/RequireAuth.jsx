import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/authAPI";

export default function RequireAuth(props) {
  // let auth = useAuth(true);
  let location = useLocation();

  if (true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
