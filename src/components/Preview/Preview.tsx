import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  PersonalInformationType,
  EducationType,
  WorkExperienceType,
} from '../../type';

type PreviewProps = {
  personalInformation: PersonalInformationType;
  education: EducationType[];
  workExperience: WorkExperienceType[];
};

const Preview = ({
  personalInformation,
  education,
  workExperience,
}: PreviewProps) => {
  const { fname, lname, address, email, description, phoneNumer, title } =
    personalInformation;
  return (
    <div className='card card-preview '>
      {/* Header - Name - Title Job - Description */}
      <div className='mb-8 sm:mb-16'>
        {/* img */}
        <div className='hidden sm:block md:min-w-[240px]'></div>

        {/* */}
        <div className='sm:ml-[240px] sm:pt-8 space-y-2 sm:space-y-4'>
          <div className='space-y-2 sm:space-y-4'>
            <h1 className='text-4xl sm:text-6xl font-extrabold text-blue-500'>
              {fname} {lname}
            </h1>
            <h3 className='text-2xl sm:text-4xl font-semibold text-gray-600'>
              {title}
            </h3>
          </div>
          <div>
            <p className='text-lg sm:text-xl font-normal text-gray-500'>
              {description}
            </p>
          </div>
        </div>
      </div>
      {/* Info - Personal details, work and Education  */}
      <div className='flex flex-col sm:flex-row'>
        {/* Personal Details - Contact*/}
        <div className='sm:min-w-[240px]'>
          <div className='mb-3'>
            <p className='title-personal-info'>Personal Details</p>
            <p className='flex items-center font-light text-md'>
              <HiOutlineLocationMarker />
              {address}
            </p>
          </div>
          <div className='mb-3'>
            <p className='title-personal-info'>Contact</p>
            <p className='flex items-center font-light text-md'>
              <AiOutlineMail /> {email}
            </p>
            <p className='flex items-center font-light text-md'>
              <AiOutlinePhone /> {phoneNumer}
            </p>
          </div>
        </div>

        {/* Work and Education */}
        <div>
          {/* Work Experience */}
          <div className='mb-6 sm:mb-10 space-y-3'>
            <h3 className='text-2xl font-semibold text-gray-600'>
              Work Experience
            </h3>
            {workExperience.map((el) => (
              <div key={el.id} id={el.id} className='mb-2'>
                <p className='text-xl font-bold text-black'>{el.position}</p>
                <p className='text-base sm:text-lg font-medium flex justify-between'>
                  {el.employer}{' '}
                  <span className='text-sm text-gray-400'>
                    {el.from}-{el.until}
                  </span>
                </p>
                <p className='text-base sm:text-lg font-normal text-gray-400'>
                  {el.taskDescription}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className='text-2xl  font-semibold text-gray-600'>Education</h3>
            {education.map((el) => (
              <div key={el.id} id={el.id} className='mb-2'>
                <p className='text-base sm:text-lg font-medium'>{el.degree}</p>
                <p className='text-base sm:text-lg font-normal flex justify-between text-gray-500'>
                  {el.schoolName}
                  <span className='text-sm text-gray-400'>
                    {el.from}-{el.until}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
      {/* #end of info*/}
    </div>
  );
};

export default Preview;
