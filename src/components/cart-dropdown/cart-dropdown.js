import React from 'react';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
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

export default CartDropdown;
