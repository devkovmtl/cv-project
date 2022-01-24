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
      className='input'
      data-category={dataCategory}
      rows={3}
    />
  ) : (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className='input'
      data-category={dataCategory}
    />
  );
}

export default InputField;
