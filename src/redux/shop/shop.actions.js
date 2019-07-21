import ShopActionsTypes from './shop.types';

export const fetchCollectionsStart = () => ({
	type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});
