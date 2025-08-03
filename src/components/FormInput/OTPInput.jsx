import { MuiOtpInput } from "mui-one-time-password-input";

const OTPInput = ({ value, onChange, name }) => {
  return (
    <div className="mt-3">
      <MuiOtpInput
        length={6}
        TextFieldsProps={{ size: "small" }}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default OTPInput;
