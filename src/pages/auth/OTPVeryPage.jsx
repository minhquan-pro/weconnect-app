import { useForm } from "react-hook-form";
import FormField from "../../components/FormField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OTPInput from "../../components/FormInput/OTPInput";

const OTPVeryPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">OTP</p>
      <form className="flex flex-col">
        <FormField
          name="otp"
          control={control}
          label="Type your 6 digit security code"
          Component={OTPInput}
        />
        <Button variant="contained">Verify my account</Button>
      </form>
      <p className="mt-4 text-dark-100">
        Didn't get the code?{" "}
        <Link to="/login" className="text-[#246AA3]">
          Resend
        </Link>
      </p>
    </div>
  );
};

export default OTPVeryPage;
