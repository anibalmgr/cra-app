import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import { fetchLogin } from "../utils/authAPI";
import { useValidateAuth } from "../hooks/useValidateAuth";
import LogoItem from "../components/shared/LogoItem";

export default function Login() {
  let navigate = useNavigate();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Please type any username"),
    password: yup.string().required("Please type any password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      fetchLogin();
      navigate("/products");
    },
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  const isAuth = useValidateAuth();

  if (isAuth) return <Navigate to="/products" />;

  return (
    <div className="h-full w-full flex flex-col justify-between pt-12 pb-8 sm:py-12 items-center">
      <LogoItem />
      <form
        className="w-full flex flex-col gap-3 items-stretch sm:items-center pb-24 sm:pb-40"
        onSubmit={formik.handleSubmit}
      >
        <Label htmlFor="username">
          Username
          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.password && (
            <AlertLabel>Please enter any username</AlertLabel>
          )}
        </Label>
        <Label htmlFor="username">
          Password
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <AlertLabel>Please enter any password</AlertLabel>
          )}
        </Label>

        <Button className="mt-8" onClick={formik.handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
}
