import React from 'react';

type InputFieldProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataCategory: string;
};

function InputField({
  placeholder,
  name,
  type,
  value,
  handleChange,
  dataCategory,
}: InputFieldProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className=''
      data-category={dataCategory}
    />
  );
}

export default InputField;
