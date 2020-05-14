import React from 'react';

import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

import { connect } from 'react-redux'
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { getCurrentUser } from '../../../redux/user/user.selectors'
import { sendAMessaage } from '../../../firebase/firebase.utils'

class SignUp extends React.Component {
  state = { displayName: this.props.user.displayName, email: this.props.user.email, message: '', number:'' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  handleText = event => {
    this.setState({message: event.target.value})
  }
  sendMessage = (e) => {
    e.preventDefault();
    const message = this.state.message;
    const number = this.state.number;
    try {
      sendAMessaage(this.props.user, {message,number})
    } catch(error) {
      console.log(error)
    } finally {
      this.setState({number: '', message:''})
    }
  }


  render() {
    const { displayName, email, number } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>Contact us</SignUpTitle>
        <span>We'd love to hear from you!.</span>
        <form className='sign-up-form' onSubmit={this.sendMessage}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Name'
            required
            disabled
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
            disabled
          />
          <FormInput
            type='number'
            name='number'
            value={number}
            onChange={this.handleChange}
            label='Phone Number'
            required
          />
          
          <textarea className="p-3 d-block mt-1 mb-4 w-100" placeholder="Message" 
          value={this.state.message}
          onChange={this.handleText}></textarea>
         
          
          <CustomButton type='submit' onClick={this.sendMessage}>Send Us message</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: getCurrentUser(state)
})

export default connect(mapStateToProps)(SignUp);
