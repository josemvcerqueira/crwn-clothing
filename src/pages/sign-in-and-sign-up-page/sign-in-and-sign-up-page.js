import React from 'react';

import './sign-in-and-sign-up-page.styles.scss';
import SignIn from '../../components/sign-in/sign-in';

const SignInAndSignUpPage = props => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
		</div>
	);
};

export default SignInAndSignUpPage;
