import React, { Component } from 'react';
import { InputField } from '../../components';

type EducationProps = {
  degree: string;
  schoolName: string;
  from: string;
  until: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Education({
  degree,
  schoolName,
  from,
  until,
  handleChange,
}: EducationProps) {
  return (
    <form className='education_form'>
      <InputField
        type='text'
        placeholder='Your degree'
        name='degree'
        value={degree}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='text'
        placeholder='School Name'
        name='schoolName'
        value={schoolName}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='date'
        placeholder='From'
        name='from'
        value={from}
        handleChange={handleChange}
        dataCategory='education'
      />

      <InputField
        type='date'
        placeholder='until'
        name='until'
        value={until}
        handleChange={handleChange}
        dataCategory='education'
      />
    </form>
  );
}

export default Education;

// const initialState = {
//   degree: '',
//   schoolName: '',
//   from: '',
//   until: '',
// };

// type EducationState = Readonly<typeof initialState>;

// class Education extends Component {
//   readonly state: EducationState = initialState;

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
//     this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
//   };

//   render() {
//     const { degree, schoolName, from, until } = this.state;

//     return (
//       <form className='education_form'>
//         <InputField
//           type='text'
//           placeholder='Your degree'
//           name='degree'
//           value={degree}
//           handleChange={this.handleChange}
//           dataCategory='education'
//         />

//         <InputField
//           type='text'
//           placeholder='School Name'
//           name='schoolName'
//           value={schoolName}
//           handleChange={this.handleChange}
//           dataCategory='education'
//         />

//         <InputField
//           type='date'
//           placeholder='From'
//           name='from'
//           value={from}
//           handleChange={this.handleChange}
//           dataCategory='education'
//         />

//         <InputField
//           type='date'
//           placeholder='until'
//           name='until'
//           value={until}
//           handleChange={this.handleChange}
//           dataCategory='education'
//         />
//       </form>
//     );
//   }
// }

// export default Education;
