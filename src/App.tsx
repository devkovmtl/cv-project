import React, { Component } from 'react';
import { Education, PersonalInformation, WorkExperience } from './containers';

class App extends Component {
  render() {
    return (
      <div className=''>
        <header className=''>
          <h1>CV PROJECT</h1>
        </header>

        <div>
          <PersonalInformation />
        </div>

        <div>
          <WorkExperience />
        </div>

        <div>
          <Education />
        </div>
      </div>
    );
  }
}

export default App;
