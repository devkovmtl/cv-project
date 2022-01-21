import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  AppState,
  EducationType,
  PersonalInformationType,
  WorkExperienceType,
} from './type';
import { Education, PersonalInformation, WorkExperience } from './containers';
import { SubHeader } from './components';
import { getItemCategoryName } from './utils';
import { itemName } from './enum';

const initialState = {
  personalInformation: {
    fname: '',
    lname: '',
    address: '',
    phoneNumer: '',
    email: '',
    description: '',
  },
  education: [],
  workExperience: [],
};

class App extends Component {
  readonly state: AppState = initialState;

  componentDidMount() {
    const educationId = uuidv4();
    const workId = uuidv4();
    this.setState((prevState: AppState) => ({
      ...prevState,
      education: prevState.education.concat({
        id: educationId,
        degree: '',
        schoolName: '',
        from: '',
        until: '',
      }),
      workExperience: prevState.workExperience.concat({
        id: workId,
        position: '',
        employer: '',
        taskDescription: '',
        from: '',
        until: '',
      }),
    }));
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

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      },
    } = this.state;
    return (
      <div className=''>
        <header className=''>
          <h1>CV PROJECT</h1>
        </header>

        <div>
          <SubHeader title='Personal Information' />
          <PersonalInformation
            fname={fname}
            lname={lname}
            address={address}
            description={description}
            email={email}
            phoneNumer={phoneNumer}
            handleChange={this.handleInputChange}
          />
        </div>

        <div>
          <SubHeader title='Work Experience' />
          {workExperience.length === 0 && (
            <button
              className='add_work_experience_btn'
              onClick={this.handleAddItem}
            >
              ➕
            </button>
          )}
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

                  <button
                    className='add_work_experience_btn'
                    onClick={this.handleAddItem}
                  >
                    ➕
                  </button>
                  <button
                    className='delete_work_experience_btn'
                    onClick={this.handleDeleteItem}
                  >
                    ❌
                  </button>
                </div>
              );
            }
          )}
        </div>

        <div>
          <SubHeader title='Education' />
          {education.length === 0 && (
            <button className='add_education_btn' onClick={this.handleAddItem}>
              ➕
            </button>
          )}
          {education.map(({ id, until, from, degree, schoolName }) => {
            return (
              <div key={id} id={id}>
                <Education
                  degree={degree}
                  schoolName={schoolName}
                  from={from}
                  until={until}
                  handleChange={this.handleArrayInputChange}
                />
                <button
                  className='add_education_btn'
                  onClick={this.handleAddItem}
                >
                  ➕
                </button>
                <button
                  className='delete_education_btn'
                  onClick={this.handleDeleteItem}
                >
                  ❌
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
