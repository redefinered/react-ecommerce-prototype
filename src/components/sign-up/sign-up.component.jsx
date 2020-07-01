/* eslint-disable no-undef */
/* eslint-disable no-alert */

import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';

import { connect } from 'react-redux';
import { Creators as UserActionCreators } from 'modules/ducks/user/user.actions';
import { selectCurrentUser } from 'modules/ducks/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser === null && this.props.currentUser) {
      // at this point there is a successful log-in
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpAction } = this.props;

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    signUpAction({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  currentUser: PropTypes.object,
  signUpAction: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const actions = {
  signUpAction: UserActionCreators.signUp
};

export default connect(mapStateToProps, actions)(SignUp);
