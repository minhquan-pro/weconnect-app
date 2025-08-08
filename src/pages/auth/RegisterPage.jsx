import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import TextInput from "../../components/FormInput/TextInput";
import { Alert, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../services/rootApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../redux/slices/snackbarSlice";

const RegisterPage = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { data, isLoading, error, isSuccess, isError }] =
    useRegisterMutation();

  const onSubmit = (data) => {
    register(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        openSnackbar({
          open: true,
          message: data.message,
        }),
      );
      navigate("/login");
    }
  }, [isSuccess, navigate, dispatch, data?.message]);

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

        <Button type="submit" variant="contained">
          Sign Up
        </Button>

        {isError && <Alert severity="error">{error.data.message}</Alert>}
      </form>
      <p className="mt-4 text-center text-dark-100">
        Already have an account?{" "}
        <Link to="/login" className="text-[#246AA3]">
          Sign in instead
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
