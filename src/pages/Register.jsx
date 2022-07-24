import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import LogoItem from "../components/shared/LogoItem";
import { useRegisterMutation } from "../queries/queries";

export default function Register() {
  const { mutate, isSuccess, isError, isIdle, isLoading, error } =
    useRegisterMutation();
  let navigate = useNavigate();
  const validationSchema = yup.object().shape({
    firstname: yup.string().required().required("Please type your firstname"),
    lastname: yup.string().required().required("Please type your lastname"),
    email: yup.string().email().required("Please type your email"),
    password: yup.string().required("Please type your password"),
  });

  function handleRegister(values) {
    mutate(values);
  }

  const loggedIn = false;
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    onSubmit: handleRegister,
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  if (loggedIn) {
    navigate("/login");
  }

  return (
    <div className="h-full w-full overflow-y-auto flex flex-col justify-between pt-12 pb-8 sm:py-12items-center overflow-hidden">
      <LogoItem />
      <form
        className="w-full flex flex-col gap-2 items-stretch sm:items-center pb-24 sm:pb-40"
        onSubmit={formik.handleSubmit}
      >
        {isError && error?.response.status === 409 && (
          <p className="py-4 text-red-600">
            User already exist, try to{" "}
            <Link className="underline" to="/login">
              login
            </Link>
          </p>
        )}
        <Label htmlFor="name">
          First Name
          <Input
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <AlertLabel>{formik.errors.firstname}</AlertLabel>
          )}
        </Label>

        <Label htmlFor="email">
          Last Name
          <Input
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <AlertLabel>{formik.errors.lastname}</AlertLabel>
          )}
        </Label>
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <AlertLabel>{formik.errors.email}</AlertLabel>
          )}
        </Label>
        <Label htmlFor="password">
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
        <Button className="mt-8" onClick={formik.handleSubmit}>
          Sign Up
        </Button>
      </form>
      {isSuccess && <Navigate to="/login" />}
    </div>
  );
}
