import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { updateCollections } from '../../redux/shop/shop.actions';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsunscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		this.unsunscribeFromSnapshot = collectionRef.onSnapshot(
			async snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(
					snapshot
				);
				updateCollections(collectionsMap);
				this.setState(prevState => ({ loading: !prevState.loading }));
			}
		);
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(
	null,
	mapDispatchToProps
)(ShopPage);
