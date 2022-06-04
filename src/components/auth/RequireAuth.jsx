import { Navigate, useLocation } from "react-router-dom";
import { useValidateAuth } from "../../hooks/useValidateAuth";
import Loading from "../shared/Loading";

export default function RequireAuth(props) {
  let {isAuth, status} = useValidateAuth();
  let location = useLocation();

  if(status == "loading"){
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
