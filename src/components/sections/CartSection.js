import React from 'react'

const CartSection = ({ numOfItems }) => (
	<section>
		<p>
			There are <b>{numOfItems}</b> items in your cart.
		</p>
		<button>Checkout</button>
	</section>
)

export default CartSection
