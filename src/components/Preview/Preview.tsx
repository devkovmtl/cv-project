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

const Preview = (props: PreviewProps) => {
  console.log(props);
  return (
    <div>
      <h1>Preview</h1>
    </div>
  );
};

export default Preview;
