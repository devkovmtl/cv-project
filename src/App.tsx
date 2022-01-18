import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from './type';
import { Education, PersonalInformation, WorkExperience } from './containers';
import { SubHeader } from './components';
import { getItemCategoryName } from './utils';
import { itemName } from './enum';

const initialState = {
  personalInformation: {
    fname: '',
    lname: '',
    picture: '',
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
      education: [
        ...prevState.education,
        {
          id: educationId,
          degree: '',
          schoolName: '',
          from: '',
          until: '',
        },
      ],
      workExperience: [
        ...prevState.workExperience,
        {
          id: workId,
          position: '',
          employer: '',
          taskDescription: '',
          from: '',
          until: '',
        },
      ],
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

  render() {
    const { education, workExperience } = this.state;
    return (
      <div className=''>
        <header className=''>
          <h1>CV PROJECT</h1>
        </header>

        <div>
          <SubHeader title='Personal Information' />
          <PersonalInformation />
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
          {workExperience.map((el) => {
            return (
              <div key={el.id} id={el.id}>
                <WorkExperience />

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
          })}
        </div>

        <div>
          <SubHeader title='Education' />
          {education.length === 0 && (
            <button className='add_education_btn' onClick={this.handleAddItem}>
              ➕
            </button>
          )}
          {education.map((el, i) => {
            return (
              <div key={el.id} id={el.id}>
                <Education />
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
