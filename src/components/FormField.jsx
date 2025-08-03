import { Controller } from "react-hook-form";

const FormField = ({ name, label, control, type, Component }) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-sm font-bold text-dark-100">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, name, value } }) => {
          return (
            <Component
              onChange={onChange}
              type={type}
              name={name}
              value={value}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
