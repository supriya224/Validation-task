import { FC, InputHTMLAttributes } from "react";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line react/function-component-definition
const InputLabel: FC<InputLabelProps> = ({
  label,
  error,
  className,
  capture,
  id,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input id={id} {...props} />
      </label>
      {error}
    </div>
  );
};

export default InputLabel;
