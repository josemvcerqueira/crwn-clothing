import React from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user.actions';

class Signup extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		} else if (password.length < 6) {
			alert('password needs to be at least 6 characters long');
			return;
		}

		signUpStart({ displayName, email, password });
	};

	render() {
		const { handleSubmit, handleChange } = this;
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your e-mail and password</span>
				<form className="sign-up-form" onSubmit={handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						label="E-mail"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(
	null,
	mapDispatchToProps
)(Signup);
