// import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";
import * as yup from "yup";
import AlertLabel from "../components/shared/AlertLabel";
import LogoItem from "../components/shared/LogoItem";
import { useLoginMutation } from "../queries/queries";

export default function Login() {
  const { mutate, isSuccess } = useLoginMutation();
  // let navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Please type your email"),
    password: yup.string().required("Please type your password"),
  });
  
  const formik = useFormik({
    initialValues: {
      email: "email",
      password: "password",
    },
    onSubmit: async (values) => mutate(values),
    validate: () => {
      if (formik.status) {
        formik.setStatus("");
      }
    },
    validationSchema,
  });
  
  console.log(isSuccess);

  return (
    <div className="h-full w-full flex flex-col justify-between pt-12 pb-8 sm:py-12 items-center">
      <LogoItem />
      <form
        className="w-full flex flex-col gap-3 items-stretch sm:items-center pb-24 sm:pb-40"
      >
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
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
