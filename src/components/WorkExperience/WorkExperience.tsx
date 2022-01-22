import React from 'react';
import { InputField } from '..';

type WorkExperienceProps = {
  position: string;
  employer: string;
  taskDescription: string;
  from: string;
  until: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function WorkExperience({
  position,
  employer,
  taskDescription,
  from,
  until,
  handleChange,
}: WorkExperienceProps) {
  return (
    <form className='work_experience_form'>
      <InputField
        type='text'
        placeholder='Position'
        name='position'
        value={position}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='Employer'
        name='employer'
        value={employer}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='From'
        name='from'
        value={from}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='Until'
        name='until'
        value={until}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='textarea'
        placeholder='Task Description'
        name='taskDescription'
        value={taskDescription}
        handleChange={handleChange}
        dataCategory='workExperience'
      />
    </form>
  );
}

export default WorkExperience;
