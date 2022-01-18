import React, { Component } from 'react';
import { InputField } from '../../components';

const initialState = {
  degree: '',
  schoolName: '',
  from: '',
  until: '',
};

type EducationState = Readonly<typeof initialState>;

class Education extends Component {
  readonly state: EducationState = initialState;

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  render() {
    const { degree, schoolName, from, until } = this.state;

    return (
      <form className='education_form'>
        <InputField
          type='text'
          placeholder='Your degree'
          name='degree'
          value={degree}
          handleChange={this.handleChange}
        />

        <InputField
          type='text'
          placeholder='School Name'
          name='schoolName'
          value={schoolName}
          handleChange={this.handleChange}
        />

        <InputField
          type='date'
          placeholder='From'
          name='from'
          value={from}
          handleChange={this.handleChange}
        />

        <InputField
          type='date'
          placeholder='until'
          name='until'
          value={until}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Education;
