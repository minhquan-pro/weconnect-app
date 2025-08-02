import { Controller } from "react-hook-form";

const FormField = ({ name, label, control, type, Component }) => {
  return (
    <div>
      <p className="text-dark-100 mb-1 text-sm font-bold">{label}</p>
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
