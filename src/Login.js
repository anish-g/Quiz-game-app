import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './backend/base.js';
import { AuthContext } from './backend/Auth.js';
import './assets/style.css';

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<div className='loginBox'>
				<h1>Log in</h1>
				<form onSubmit={handleLogin}>
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
					<button type='submit' className='fancyBtn'>Log in</button>
				</form>
				<p>Don't have an account? <a href='/signup'>Register</a></p>
			</div>
		</div>
	);
};

export default withRouter(Login);