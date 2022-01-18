import React, { Component } from 'react';
import { InputField } from '../../components';

const initialState = {
  fname: '',
  lname: '',
  picture: '',
  address: '',
  phoneNumer: '',
  email: '',
  description: '',
};

type PersonalInfoState = Readonly<typeof initialState>;
class PersonalInformation extends Component {
  readonly state: PersonalInfoState = initialState;

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  render() {
    const { fname, lname, picture, address, phoneNumer, email, description } =
      this.state;
    return (
      <form className='personal__information_form'>
        <InputField
          type='text'
          placeholder='First Name'
          name='fname'
          value={fname}
          handleChange={this.handleChange}
        />
        <InputField
          type='text'
          placeholder='Last Name'
          name='lname'
          value={lname}
          handleChange={this.handleChange}
        />
        <InputField
          type='file'
          placeholder='Select Your Picture'
          name='picture'
          value={picture}
          handleChange={this.handleChange}
        />
        <InputField
          type='text'
          placeholder='Enter your address'
          name='address'
          value={address}
          handleChange={this.handleChange}
        />

        <InputField
          type='email'
          placeholder='Enter your email'
          name='email'
          value={email}
          handleChange={this.handleChange}
        />

        <InputField
          type='tel'
          placeholder='Enter your phone number'
          name='phoneNumer'
          value={phoneNumer}
          handleChange={this.handleChange}
        />
        <InputField
          type='textarea'
          placeholder='Write a paragraph about yourself.'
          name='description'
          value={description}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default PersonalInformation;
