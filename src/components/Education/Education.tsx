import React from 'react';
import { InputField } from '..';

type EducationProps = {
  degree: string;
  schoolName: string;
  from: string;
  until: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function Education({
  degree,
  schoolName,
  from,
  until,
  handleChange,
}: EducationProps) {
  return (
    <form className='education_form'>
      <InputField
        type='text'
        placeholder='Your degree'
        name='degree'
        value={degree}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='text'
        placeholder='School Name'
        name='schoolName'
        value={schoolName}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='date'
        placeholder='From'
        name='from'
        value={from}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='date'
        placeholder='until'
        name='until'
        value={until}
        handleChange={handleChange}
        dataCategory='education'
      />
    </form>
  );
}

export default Education;
