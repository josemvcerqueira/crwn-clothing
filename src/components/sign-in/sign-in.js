import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		this.setState({ email: '', password: '' });

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log('error');
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { handleSubmit, handleChange } = this;
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
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
