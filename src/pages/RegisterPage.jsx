import { useForm } from "react-hook-form";
import FormField from "../components/FormField";
import TextInput from "../components/FormInput/TextInput";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="bg-dark-200 rounded border p-8 shadow-2xl">
        <img src="/public/weconnect-logo.png" alt="" className="m-auto mb-6" />
        <p className="mb-5 text-center text-2xl font-bold">Register</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="fullName"
            control={control}
            label="Full Name"
            Component={TextInput}
          />

          <FormField
            name="email"
            control={control}
            label="Email"
            Component={TextInput}
          />

          <FormField
            name="password"
            type="password"
            control={control}
            label="Password"
            Component={TextInput}
          />

          <Button variant="contained" className="mt-4">
            Sign Up
          </Button>
        </form>
        <p className="text-dark-100 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#246AA3]">
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
