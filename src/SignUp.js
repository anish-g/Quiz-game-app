import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from './backend/base.js';
import './assets/style.css';

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await app
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value);
			history.push('/');
    } catch (error) {
			alert(error);
		}
	}, [history]);
	
	return (
		<div>
			<div className='loginBox'>
			<h1>Sign up</h1>
			<form onSubmit={handleSignUp}>
				<label>
					Email
					<input name='email' type='email' placeholder='Email' /> 
				</label>
				<br />
				<label>
					Password
					<input name='password' type='password' placeholder='Password' /> 
				</label>
				<br />
				<button type='submit' className='fancyBtn'>Sign Up</button>
			</form>
			<p>Already have an account? <a href='/login'>Log in</a></p>
			</div>
		</div>
	);
};

export default withRouter(SignUp);