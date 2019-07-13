import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';

const CartDropdown = props => (
	<div className="cart-dropdown">
		<div className="cart-items">
			<CustomButton>CHECKOUT</CustomButton>
		</div>
	</div>
);

export default CartDropdown;
