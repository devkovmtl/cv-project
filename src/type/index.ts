export type PersonalInformationType = {
  fname: string;
  lname: string;
  picture: string;
  address: string;
  phoneNumer: string;
  email: string;
  description: string;
};

export type EducationType = {
  id: string;
  degree: string;
  schoolName: string;
  from: string;
  until: string;
};

export type WorkExperienceType = {
  id: string;
  position: string;
  employer: string;
  taskDescription: string;
  from: string;
  until: string;
};

export type AppState = {
  personalInformation: PersonalInformationType;
  education: EducationType[];
  workExperience: WorkExperienceType[];
};
