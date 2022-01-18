import React, { Component } from 'react';
import { InputField } from '../../components';

const initialState = {
  position: '',
  employer: '',
  taskDescription: '',
  from: '',
  until: '',
};

type WorkExperienceState = Readonly<typeof initialState>;

class WorkExperience extends Component {
  readonly state: WorkExperienceState = initialState;

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  render() {
    const { position, employer, taskDescription, from, until } = this.state;
    return (
      <div>
        <h2>Work Experience</h2>
        <div>
          <form>
            <InputField
              type='text'
              placeholder='Position'
              name='position'
              value={position}
              handleChange={this.handleChange}
            />

            <InputField
              type='text'
              placeholder='Employer'
              name='employer'
              value={employer}
              handleChange={this.handleChange}
            />

            <InputField
              type='text'
              placeholder='From'
              name='from'
              value={from}
              handleChange={this.handleChange}
            />

            <InputField
              type='text'
              placeholder='Until'
              name='until'
              value={until}
              handleChange={this.handleChange}
            />

            <InputField
              type='textarea'
              placeholder='Employer'
              name='taskDescription'
              value={taskDescription}
              handleChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
