import { all, takeLatest, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './shop.actions';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* watchFetchCollectionsAsync() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* shopSagas() {
	yield all([call(watchFetchCollectionsAsync)]);
}
