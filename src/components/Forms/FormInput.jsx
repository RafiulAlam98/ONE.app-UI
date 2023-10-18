import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            placeholder={placeholder}
            size={size}
            type={type}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
