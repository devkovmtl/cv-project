import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BiChevronDown } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';

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
    const categoryName = getItemCategoryName(e);
    const parentId = (e.target as Element).parentElement?.parentElement?.id;
    if (categoryName === itemName.education) {
      this.setState((prevState: AppState) => ({
        ...prevState,
        education: [...prevState.education.filter((el) => el.id !== parentId)],
      }));
    }

    if (categoryName === itemName.workExperience) {
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
    e.preventDefault();
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
        <div className='flex flex-col items-start justify-center lg:flex-row lg:items-start lg:justify-center'>
          {/* FORM COLUMN */}
          <div className='w-full flex flex-col pb-6 justify-center items-center lg:ml-11 lg:max-w-md'>
            <div className='card card-form relative'>
              <SubHeader title='Personal Information' />
              <Button
                handleClick={this.collapseCard}
                children={<BiChevronDown fontSize={24} />}
                classList='button collapse-button'
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

            <div className='card card-form relative'>
              <SubHeader title='Work Experience' />

              {workExperience.length === 0 && (
                <Button
                  classList='add-work-experience-button button text-green-700'
                  children={<IoAddOutline />}
                  handleClick={this.handleAddItem}
                  data-category='workExperience'
                />
              )}
              <Button
                handleClick={this.collapseCard}
                children={<BiChevronDown fontSize={'20px'} />}
                classList='button collapse-button'
              />
              {workExperience.map(
                ({ id, employer, position, taskDescription, until, from }) => {
                  return (
                    <div
                      key={id}
                      id={id}
                      className='work-experience-container mb-2'
                    >
                      <WorkExperience
                        employer={employer}
                        position={position}
                        taskDescription={taskDescription}
                        from={from}
                        until={until}
                        handleChange={this.handleArrayInputChange}
                      />
                      <div className='flex my-2'>
                        <Button
                          classList='add-work-experience-button button text-green-700'
                          children={<IoAddOutline />}
                          handleClick={this.handleAddItem}
                          data-category='workExperience'
                        />

                        <Button
                          classList='delete-work-experience-button button text-red-700'
                          children={<MdOutlineDelete />}
                          handleClick={this.handleDeleteItem}
                          data-category='workExperience'
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className='card card-form relative'>
              <SubHeader title='Education' />
              {education.length === 0 && (
                <Button
                  classList='add-education-button button text-green-700'
                  children={<IoAddOutline />}
                  handleClick={this.handleAddItem}
                  data-category='education'
                />
              )}
              <Button
                handleClick={this.collapseCard}
                children={<BiChevronDown fontSize={'20px'} />}
                classList='button collapse-button'
              />
              {education.map(({ id, until, from, degree, schoolName }) => {
                return (
                  <div key={id} id={id} className='mb-2'>
                    <Education
                      degree={degree}
                      schoolName={schoolName}
                      from={from}
                      until={until}
                      handleChange={this.handleArrayInputChange}
                    />
                    <div className='flex my-2'>
                      <Button
                        classList='add-education-button button text-green-700'
                        children={<IoAddOutline />}
                        handleClick={this.handleAddItem}
                        data-category='education'
                      />

                      <Button
                        classList='delete-education-button button text-red-700'
                        children={<MdOutlineDelete />}
                        handleClick={this.handleDeleteItem}
                        data-category='education'
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PREVIEW COLUMN */}
          <div className='w-full flex items-center justify-center'>
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
