import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '', dob:'', erro: "" };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword, dob } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName, dob });
    } catch (error) {
      console.error(error);
      this.setState({erro: error});
    }

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  render() {
    const { displayName, email, password, confirmPassword, dob } = this.state;
  const res = this.state.erro ? <p style={{color: "red"}}>{this.state.erro.message}</p> : null;
    return (
      <SignUpContainer>
        <SignUpTitle>Create an account</SignUpTitle>
        <span>Sign up with your email and password.</span>
        {res}
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <FormInput
            type='text'
            name='dob'
            value={dob}
            onChange={this.handleChange}
            label='Date Of Birth DD-MM-YYYY'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
