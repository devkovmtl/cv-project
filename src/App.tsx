import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  AppState,
  EducationType,
  PersonalInformationType,
  WorkExperienceType,
} from './type';
import {
  SubHeader,
  Education,
  PersonalInformation,
  WorkExperience,
  Preview,
  Button,
} from './components';
import { getItemCategoryName, generateFakeResume } from './utils';
import { itemName } from './enum';

const initialState = {
  personalInformation: {
    fname: '',
    lname: '',
    address: '',
    phoneNumer: '',
    email: '',
    description: '',
    title: '',
  },
  education: [],
  workExperience: [],
};

class App extends Component {
  readonly state: AppState = initialState;

  componentDidMount() {
    const { personalInformation, education, workExperience } = this.state;
    const fakeData = generateFakeResume();

    this.setState((prevState: AppState) => {
      return {
        ...prevState,
        personalInformation: {
          ...personalInformation,
          fname: fakeData.personalInformation.randomFirstName,
          lname: fakeData.personalInformation.randomLastName,
          address: fakeData.personalInformation.randomAddress,
          phoneNumer: fakeData.personalInformation.randomPhone,
          email: fakeData.personalInformation.randomEmail,
          description: fakeData.personalInformation.randomDescription,
          title: fakeData.personalInformation.randomJobTitle,
        },
        workExperience: [
          ...workExperience.concat(
            fakeData.workExperience.map((e) => ({
              id: uuidv4(),
              position: e.randomPosition,
              employer: e.randomEmployer,
              from: e.randomFrom,
              until: e.randomUntil,
              taskDescription: e.randomJobDescription,
            }))
          ),
        ],
        education: [
          ...education.concat(
            fakeData.education.map((e) => ({
              id: uuidv4(),
              degree: e.randomDegree,
              schoolName: e.randomSchoolName,
              from: e.randomFrom,
              until: e.randomUntil,
            }))
          ),
        ],
      };
    });
  }

  handleAddItem = (e: React.MouseEvent<HTMLElement>) => {
    const catgegoryName = getItemCategoryName(e);
    if (catgegoryName === itemName.education) {
      const id = uuidv4();
      this.setState((prevState: AppState) => ({
        ...prevState,
        education: [
          ...prevState.education,
          {
            id,
            degree: '',
            schoolName: '',
            from: '',
            until: '',
          },
        ],
      }));
    }

    if (catgegoryName === itemName.workExperience) {
      const id = uuidv4();
      this.setState((prevState: AppState) => ({
        ...prevState,
        workExperience: [
          ...prevState.workExperience,
          {
            id,
            position: '',
            employer: '',
            taskDescription: '',
            from: '',
            until: '',
          },
        ],
      }));
    }
  };

  handleDeleteItem = (e: React.MouseEvent<HTMLElement>) => {
    const catgegoryName = getItemCategoryName(e);
    const parentId = (e.target as Element).parentElement?.id;
    if (catgegoryName === itemName.education) {
      this.setState((prevState: AppState) => ({
        ...prevState,
        education: [...prevState.education.filter((el) => el.id !== parentId)],
      }));
    }

    if (catgegoryName === itemName.workExperience) {
      this.setState((prevState: AppState) => ({
        ...prevState,
        workExperience: [
          ...prevState.workExperience.filter((el) => el.id !== parentId),
        ],
      }));
    }
  };

  handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof PersonalInformationType;
      value: string;
    };
    const { personalInformation } = this.state;
    const currentPersoInfo = personalInformation;
    currentPersoInfo[name] = value;
    this.setState((prevState: AppState) => ({
      ...prevState,
      personalInformation: currentPersoInfo,
    }));
  };

  handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const category = e.target.getAttribute('data-category');
    const parentId = (e.target as Element).closest(`div`)?.id;
    const { name, value } = e.target;
    const { workExperience, education } = this.state;

    if (category === itemName.workExperience) {
      const index = workExperience.findIndex((el) => el.id === parentId);
      if (index === -1) {
        return;
      } else {
        const currentWorkInfo = workExperience[index];
        currentWorkInfo[name as keyof WorkExperienceType] = value;
        this.setState((prevState: AppState) => ({
          ...prevState,
          workExperience: [
            ...prevState.workExperience.slice(0, index),
            currentWorkInfo,
            ...prevState.workExperience.slice(index + 1),
          ],
        }));
      }
    }

    if (category === itemName.education) {
      const index = education.findIndex((el) => el.id === parentId);
      if (index === -1) {
        return;
      } else {
        const currentEducation = education[index];
        currentEducation[name as keyof EducationType] = value;
        this.setState((prevState: AppState) => ({
          ...prevState,
          education: [
            ...prevState.education.slice(0, index),
            currentEducation,
            ...prevState.education.slice(index + 1),
          ],
        }));
      }
    }
  };

  collapseCard = (e: React.MouseEvent<HTMLElement>) => {
    let allSiblings = [];
    const target = e.target as Element;
    let current = target.nextElementSibling;

    while (current) {
      allSiblings.push(current);
      current = current.nextElementSibling;
    }
    allSiblings.forEach((el) => el.classList.toggle(`hidden`));
  };

  render() {
    const {
      education,
      workExperience,
      personalInformation: {
        fname,
        lname,
        address,
        description,
        email,
        phoneNumer,
        title,
      },
    } = this.state;

    return (
      <div className='min-h-screen bg-slate-100'>
        <header className='text-6xl font-bold uppercase text-center py-8'>
          <h1>Resume Maker</h1>
        </header>
        {/* APP CONTAINER */}
        <div className='flex flex-col lg:flex-row lg:justify-evenly '>
          {/* FORM COLUMN */}
          <div>
            <div className='card-form relative'>
              <SubHeader title='Personal Information' />
              <Button
                handleClick={this.collapseCard}
                children={'-'}
                classList='collapseButton'
              />
              <PersonalInformation
                fname={fname}
                lname={lname}
                address={address}
                description={description}
                email={email}
                phoneNumer={phoneNumer}
                title={title}
                handleChange={this.handleInputChange}
              />
            </div>

            <div className='card-form relative'>
              <SubHeader title='Work Experience' />

              {workExperience.length === 0 && (
                <Button
                  classList='add_work_experience_btn'
                  children='➕'
                  handleClick={this.handleAddItem}
                />
              )}
              <Button
                handleClick={this.collapseCard}
                children={'-'}
                classList='collapseButton'
              />
              {workExperience.map(
                ({ id, employer, position, taskDescription, until, from }) => {
                  return (
                    <div key={id} id={id} className='work-experience-container'>
                      <WorkExperience
                        employer={employer}
                        position={position}
                        taskDescription={taskDescription}
                        from={from}
                        until={until}
                        handleChange={this.handleArrayInputChange}
                      />
                      <Button
                        classList='add_work_experience_btn'
                        children='➕'
                        handleClick={this.handleAddItem}
                      />

                      <Button
                        classList='delete_work_experience_btn'
                        children='❌'
                        handleClick={this.handleDeleteItem}
                      />
                    </div>
                  );
                }
              )}
            </div>

            <div className='card-form relative'>
              <SubHeader title='Education' />
              {education.length === 0 && (
                <Button
                  classList='add_work_experience_btn'
                  children='➕'
                  handleClick={this.handleAddItem}
                />
              )}
              <Button
                handleClick={this.collapseCard}
                children={'-'}
                classList='collapseButton'
              />
              {education.map(({ id, until, from, degree, schoolName }) => {
                return (
                  <div key={id} id={id} className=''>
                    <Education
                      degree={degree}
                      schoolName={schoolName}
                      from={from}
                      until={until}
                      handleChange={this.handleArrayInputChange}
                    />
                    <Button
                      classList='add_work_experience_btn'
                      children='➕'
                      handleClick={this.handleAddItem}
                    />

                    <Button
                      classList='delete_education_btn'
                      children='❌'
                      handleClick={this.handleDeleteItem}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* PREVIEW COLUMN */}
          <div className='card-preview'>
            <Preview
              personalInformation={this.state.personalInformation}
              education={this.state.education}
              workExperience={this.state.workExperience}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
