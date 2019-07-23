import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [credentials, setCredentials] = useState({ email: '', password: '' });

	const { email, password } = credentials;

	const handleSubmit = async event => {
		event.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					label="email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					label="password"
					value={password}
					handleChange={handleChange}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
