import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import LogoItem from "../components/shared/LogoItem";
import { useLoginMutation } from "../queries/queries";

export default function Login() {
  const { mutate, isSuccess, isLoading, isError, error } = useLoginMutation();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Please type your email"),
    password: yup.string().required("Please type your password"),
  });

  function handleLogin(values) {
    mutate(values);
  }

  const formik = useFormik({
    initialValues: {
      email: "email",
      password: "password",
    },
    onSubmit: handleLogin,
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  return (
    <div className="h-full w-full flex flex-col justify-between pt-12 pb-8 sm:py-12 items-center">
      <LogoItem />
      <form
        className="w-full flex flex-col gap-3 items-stretch sm:items-center pb-24 sm:pb-40"
        onSubmit={formik.handleSubmit}
      >
        {isError &&
          (error?.response.status === 404 ? (
            <p className="py-4 text-red-600 text-center">
              User doesn't exist,
              <br /> do you want to{" "}
              <Link to="register" className="underline">
                register
              </Link>{" "}
              a new user?
            </p>
          ) : (
            <p>{error?.response.data?.message || "an error has ocurred"}</p>
          ))}
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.email && formik.errors.email && (
            <AlertLabel>{formik.errors.email}</AlertLabel>
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
            <AlertLabel>{formik.errors.password}</AlertLabel>
          )}
        </Label>

        <Button
          isLoading={isLoading}
          className="mt-8"
          onClick={formik.handleSubmit}
        >
          Login
        </Button>
      </form>
      {isSuccess && <Navigate to="/products" />}
    </div>
  );
}
