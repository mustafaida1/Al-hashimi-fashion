import React from 'react';
import './contact.css'
import SignUp from './sign-up/sign-up.component'
import  Cont from '../../assets/contact.jpg'
import {SignInAndSignUpContainer} from './sign-up/sign-in-and-sign-up.styles'
const ContactPage = () => {
	return (
	
		<div>
			<SignInAndSignUpContainer>
				<SignUp />
				<img src={Cont} alt="" id="big"/>
			</SignInAndSignUpContainer>
		</div>
)
}

export default ContactPage;