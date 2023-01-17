/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.savePersonalInfo}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={this.props.handleChange}
          data-category="personalInfo"
          placeholder="First Name"
          name="name"
          value={this.props.personalInfo.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={this.props.handleChange}
          data-category="personalInfo"
          placeholder="Email"
          name="email"
          value={this.props.personalInfo.email}
        />
        <label htmlFor="phone-number">Phone number</label>
        <input
          type="text"
          id="phone-number"
          onChange={this.props.handleChange}
          data-category="personalInfo"
          placeholder="Phone number"
          name="phone"
          value={this.props.personalInfo.phone}
        />
        <button type="submit"> Next </button>
      </form>
    );
  }
}

export default PersonalInfo;
