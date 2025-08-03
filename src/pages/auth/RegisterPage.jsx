import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import TextInput from "../../components/FormInput/TextInput";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Register</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="fullName"
          control={control}
          label="UserName"
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

        <Button variant="contained">Sign Up</Button>
      </form>
      <p className="mt-4 text-dark-100">
        Already have an account?{" "}
        <Link to="/login" className="text-[#246AA3]">
          Sign in instead
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
