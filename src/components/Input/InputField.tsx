import React from 'react';

type InputFieldProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
};

function InputField({
  placeholder,
  name,
  type,
  value,
  handleChange,
}: InputFieldProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={(e) => handleChange(e, name)}
      className=''
    />
  );
}

export default InputField;
