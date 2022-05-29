import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import { fetchLogin } from "../utils/authAPI";
import { useValidateAuth } from "../hooks/useValidateAuth";

export default function Login() {
  let navigate = useNavigate();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Please type your username"),
    password: yup.string().required("Please type your password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      fetchLogin();
      navigate("/product");
    },
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  const isAuth = useValidateAuth();
  console.log(isAuth);

  if (isAuth) return <Navigate to="/products" />;

  return (
    <div className="h-full w-full flex flex-col justify-between pt-16 pb-8 sm:py-32 items-center">
      <div className="text-center">
        <img src="assets/images/logomark.png" alt="" />
        <p className="text-4xl md:text-7xl font-bold">DOMIN</p>
        <p className="sm:text-3xl">Ascend</p>
      </div>
      <form
        className="w-full flex flex-col gap-3 items-stretch sm:items-center pb-24 sm:pb-40"
        onSubmit={formik.handleSubmit}
      >
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.password && (
          <AlertLabel>Please enter your username</AlertLabel>
        )}
        <Label htmlFor="username">Username</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <AlertLabel>Please enter your password</AlertLabel>
        )}

        <Button className="mt-8" onClick={formik.handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
}
