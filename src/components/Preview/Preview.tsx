import React from 'react';
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
    <div className='p-16 flex flex-col'>
      {/* Header - Name - Title Job - Description */}
      <div className='mb-16 ml-[120px]'>
        <div>
          <h1 className='text-6xl font-extrabold text-blue-500'>
            {fname} {lname}
          </h1>
          <h3 className='text-4xl font-semibold text-gray-400'>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      {/* Info - Personal details, work and Education  */}
      <div className='flex'>
        {/* Personal Details - Contact*/}
        <div className='min-w-[120px]'>
          <div>
            <p>Personal Details</p>
            <p>{address}</p>
          </div>
          <div>
            <p>Contact</p>
            <p>{email}</p>
            <p>{phoneNumer}</p>
          </div>
        </div>

        {/* Work and Education */}
        <div>
          {/* Work Experience */}
          <div>
            <h3>Work Experience</h3>
            {workExperience.map((el) => (
              <div key={el.id} id={el.id}>
                <p>{el.position}</p>
                <p>
                  {el.employer}{' '}
                  <span>
                    {el.from}-{el.until}
                  </span>
                </p>
                <p>{el.taskDescription}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3>Education</h3>
            {education.map((el) => (
              <div key={el.id} id={el.id}>
                <p>{el.degree}</p>
                <p>
                  {el.schoolName}
                  <span>
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
