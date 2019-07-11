import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/homepage/HomePage';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

const App = props => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
};

export default App;
