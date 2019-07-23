import React from 'react';

import './HomePage.styles.scss';
import Directory from '../../components/directory/directory';

const HomePage = props => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default HomePage;
