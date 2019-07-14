import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const handleCheckout = () => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	};

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={handleCheckout}>CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
