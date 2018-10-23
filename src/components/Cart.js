import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ children, numOfItems }) => (
	<div id="cart">
		<h2>Cart</h2>
		<section>
			<p>
				There are <b>{numOfItems}</b> items in your cart.
			</p>
			<button>Checkout</button>
		</section>
		<p>
			Total: <b>$0.00</b>
		</p>
		{children}
	</div>
)

Cart.propTypes = {
	children: PropTypes.node,
	numOfItems: PropTypes.number.isRequired
}

export default Cart
