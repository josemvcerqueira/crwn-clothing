import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_sFFpS5N2YLPOkIMvpX2FZbe600gfYLitiH';

	const onToken = async token => {
		try {
			const response = await axios({
				url: 'payment',
				method: 'post',
				data: {
					amount: priceForStripe,
					token,
				},
			});

			if (response) alert('Payment successful');
		} catch (error) {
			console.log(`Payment error: ${JSON.parse(error)}`);
			alert(
				'There was an issue with your payment. Please make sure you use the provided credit card'
			);
		}
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothinng Ltd."
			billingAddress
			shippingAddress
			bitcoin
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
