import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { handleSubmit, handleChange } = this;
		const { googleSignInStart } = this.props;

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
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
