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
    <div>
      <h1>
        {fname} {lname}
      </h1>
      <h3>{title}</h3>
    </div>
  );
};

export default Preview;
