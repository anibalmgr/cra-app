import { Navigate, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/authAPI";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import LogoItem from "../components/shared/LogoItem";
import { fetchRegister } from "../utils/authAPI";

export default function Register() {
  // let navigate = useNavigate();
  const validationSchema = yup.object().shape({
    firstname: yup.string().required().required("Please type your firstname"),
    lastname: yup.string().required().required("Please type your lastname"),
    email: yup.string().email().required("Please type your email"),
    password: yup.string().required("Please type your password"),
  });

  const loggedIn = false;
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      fetchRegister({first_name: values.firstname, last_name: values.lastname, email: values.email, password: values.password});
    },
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  if (loggedIn) return <Navigate to="/products" />;

  return (
    <div className="h-full w-full overflow-y-auto flex flex-col justify-between pt-12 pb-8 sm:py-12items-center overflow-hidden">
      <LogoItem />
      <form
        className="w-full flex flex-col gap-2 items-stretch sm:items-center pb-24 sm:pb-40"
        onSubmit={formik.handleSubmit}
      >
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
            <AlertLabel>Please enter any firstname</AlertLabel>
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
            <AlertLabel>Please enter any last name</AlertLabel>
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
            <AlertLabel>Please enter any valid email</AlertLabel>
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
            <AlertLabel>Please enter any password</AlertLabel>
          )}
        </Label>
        <Button className="mt-8" onClick={formik.handleSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
