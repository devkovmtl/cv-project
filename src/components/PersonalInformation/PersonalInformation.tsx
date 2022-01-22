import React from 'react';
import { InputField } from '..';

type PersonalInformationProps = {
  fname: string;
  lname: string;
  address: string;
  email: string;
  phoneNumer: string;
  description: string;
  title: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function PersonalInformation({
  fname,
  lname,
  address,
  email,
  phoneNumer,
  description,
  handleChange,
  title,
}: PersonalInformationProps) {
  return (
    <form className='personal__information_form'>
      <InputField
        type='text'
        placeholder='First Name'
        name='fname'
        value={fname}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />
      <InputField
        type='text'
        placeholder='Last Name'
        name='lname'
        value={lname}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />
      <InputField
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />
      <InputField
        type='text'
        placeholder='Enter your address'
        name='address'
        value={address}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />

      <InputField
        type='email'
        placeholder='Enter your email'
        name='email'
        value={email}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />

      <InputField
        type='tel'
        placeholder='Enter your phone number'
        name='phoneNumer'
        value={phoneNumer}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />
      <InputField
        type='textarea'
        placeholder='Write a paragraph about yourself.'
        name='description'
        value={description}
        handleChange={handleChange}
        dataCategory='personalInformation'
      />
    </form>
  );
}

export default PersonalInformation;
