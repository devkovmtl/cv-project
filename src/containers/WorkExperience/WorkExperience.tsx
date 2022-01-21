import React, { Component } from 'react';
import { InputField } from '../../components';

type WorkExperienceProps = {
  position: string;
  employer: string;
  taskDescription: string;
  from: string;
  until: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function WorkExperience({
  position,
  employer,
  taskDescription,
  from,
  until,
  handleChange,
}: WorkExperienceProps) {
  return (
    <form className='work_experience_form'>
      <InputField
        type='text'
        placeholder='Position'
        name='position'
        value={position}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='Employer'
        name='employer'
        value={employer}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='textarea'
        placeholder='Task Description'
        name='taskDescription'
        value={taskDescription}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='From'
        name='from'
        value={from}
        handleChange={handleChange}
        dataCategory='workExperience'
      />

      <InputField
        type='text'
        placeholder='Until'
        name='until'
        value={until}
        handleChange={handleChange}
        dataCategory='workExperience'
      />
    </form>
  );
}

export default WorkExperience;

// const initialState = {
//   position: '',
//   employer: '',
//   taskDescription: '',
//   from: '',
//   until: '',
// };

// type WorkExperienceState = Readonly<typeof initialState>;

// class WorkExperience extends Component {
//   readonly state: WorkExperienceState = initialState;

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
//     this.setState((prevState) => ({ ...prevState, [name]: e.target.value }));
//   };

//   render() {
//     const { position, employer, taskDescription, from, until } = this.state;
//     return (
//       <form className='work_experience_form'>
//         <InputField
//           type='text'
//           placeholder='Position'
//           name='position'
//           value={position}
//           handleChange={this.handleChange}
//         />

//         <InputField
//           type='text'
//           placeholder='Employer'
//           name='employer'
//           value={employer}
//           handleChange={this.handleChange}
//         />

//         <InputField
//           type='text'
//           placeholder='From'
//           name='from'
//           value={from}
//           handleChange={this.handleChange}
//         />

//         <InputField
//           type='text'
//           placeholder='Until'
//           name='until'
//           value={until}
//           handleChange={this.handleChange}
//         />

//         <InputField
//           type='textarea'
//           placeholder='Employer'
//           name='taskDescription'
//           value={taskDescription}
//           handleChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }

// export default WorkExperience;
