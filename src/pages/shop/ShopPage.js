import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({ match }) => (
	<div>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route
			path={`${match.path}/:collectionId`}
			component={CollectionPage}
		/>
	</div>
);

export default ShopPage;
