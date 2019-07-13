import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import Header from './components/header/header';
import HomePage from './pages/homepage/HomePage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import ShopPage from './pages/shop/ShopPage';
import { setCurrentUser } from './redux/user/user.action';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	handleSignInRedirect = () =>
		console.log(this.props.currentUser) || this.props.currentUser ? (
			<Redirect to="/" />
		) : (
			<SignInAndSignUpPage />
		);

	render() {
		const { handleSignInRedirect } = this;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/signin" render={handleSignInRedirect} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
