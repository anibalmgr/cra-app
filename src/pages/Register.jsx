import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/authAPI";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";

export default function Register() {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Please type your email"),
    password: yup.string().required("Please type your password"),
  });

  const loggedIn = false;
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });

  if (loggedIn) return <Navigate to="/products" />;

  console.log(formik.errors);

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
        <Label htmlFor="name">First Name</Label>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <AlertLabel>Please enter an email</AlertLabel>
        )}

        <Label htmlFor="email">Last Name</Label>
        <Input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname && (
          <AlertLabel>Please enter an email</AlertLabel>
        )}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <AlertLabel>Please enter an email</AlertLabel>
        )}
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <AlertLabel>Please enter a password</AlertLabel>
        )}
        <Button className="mt-8" onClick={formik.handleSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
