import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
