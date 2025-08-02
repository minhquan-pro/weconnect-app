import { TextField } from "@mui/material";

const TextInput = ({ onChange, name, value, type }) => {
  return (
    <div>
      <TextField
        fullWidth
        slotProps={{
          input: { className: "h-10 px-3 py-2 " },
          htmlInput: { className: "!p-0" },
        }}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default TextInput;
