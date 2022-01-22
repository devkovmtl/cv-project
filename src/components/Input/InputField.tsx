import React from 'react';

type InputFieldProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  return type === 'textarea' ? (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      className='w-full my-1 max-w-md rounded-md'
      data-category={dataCategory}
    />
  ) : (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className='w-full my-1 max-w-md rounded-md'
      data-category={dataCategory}
    />
  );
}

export default InputField;
