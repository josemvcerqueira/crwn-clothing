import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	selectCartItems,
	selectCartHidden,
} from '../../redux/cart/cart.selectors';
import CartDropdown from './cart-dropdown';

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	hidden: selectCartHidden,
});

const handleCartDropDown = ({ hidden, ...otherProps }) => {
	return hidden ? null : <CartDropdown {...otherProps} />;
};

const CartDropDownContainer = compose(
	withRouter,
	connect(mapStateToProps)
)(handleCartDropDown);

export default CartDropDownContainer;
