/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PersonalInfo from '../components/PersonalInfo.js/index';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      cv: { personalInfo: {}, education: [], expirience: [] },
      personalInfo: { name: '', email: '', phone: '' },
      education: { schoolName: '', title: '', date: '' },
      practicalXP: {
        company: '', title: '', description: '', initDate: '', endDate: '',
      },
    };
  }

  savePersonalInfo = (e) => {
    e.preventDefault();
    console.log('Hello', e.target);
  };

  handleChange = (e) => {
    console.log(e.target.dataset.category);
    const changedState = { ...this.state[e.target.dataset.category] };
    changedState[e.target.name] = e.target.value;
    this.setState({ personalInfo: changedState });
    console.log(changedState);
  };

  render() {
    return (
      <div>
        <p>
          {' '}
          Hello, in this section you need to fill this form with your
          personal information.
        </p>
        <PersonalInfo
          savePersonalInfo={this.savePersonalInfo}
          handleChange={this.handleChange}
          personalInfo={this.state.personalInfo}
        />
      </div>
    );
  }
}

export default Form;
