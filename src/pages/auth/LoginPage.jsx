import { Button } from "@mui/material";
import FormField from "../../components/FormField";
import TextInput from "../../components/FormInput/TextInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { control } = useForm();

  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Log In</p>
      <form className="flex flex-col gap-4">
        <FormField
          name="user"
          label="Email or UserName"
          control={control}
          Component={TextInput}
        />

        <FormField
          name="password"
          type="password"
          label="Password"
          control={control}
          Component={TextInput}
        />

        <Button variant="contained">Sign in</Button>
      </form>
      <p className="mt-4 text-dark-100">
        New on our platform?{" "}
        <Link to="/register" className="text-[#246AA3]">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
