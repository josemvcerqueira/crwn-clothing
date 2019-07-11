import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import HomePage from './pages/homepage/HomePage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import ShopPage from './pages/shop/ShopPage';
import { auth } from './firebase/firebase.utils';

class App extends Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
			this.setState({ currentUser });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
