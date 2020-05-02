import React from 'react';

import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle, TextAR } from './sign-up.styles';

class SignUp extends React.Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '', number:'' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   const { displayName, email, password, confirmPassword, dob } = this.state;

  //   if (password !== confirmPassword) {
  //     alert("passwords don't match");
  //     return;
  //   }

  //   try {
  //     const { user } = await auth.createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );

  //     createUserProfileDocument(user, { displayName, dob });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   this.setState({
  //     displayName: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: ''
  //   });
  // };

  render() {
    const { displayName, email, number } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>Contact us</SignUpTitle>
        <span>We'd love to hear from you!.</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Name'
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
            type='number'
            name='number'
            value={number}
            onChange={this.handleChange}
            label='Phone Number'
            required
          />
          
          <textarea className="p-3 d-block mt-1 mb-4 w-100" placeholder="Message" ></textarea>
         
          
          <CustomButton type='submit'>Send Us message</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
