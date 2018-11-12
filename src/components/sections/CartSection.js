import React from 'react'
import PropTypes from 'prop-types'

const CartSection = ({ numOfItems }) => (
	<section>
		<p>
			There are <b>{numOfItems}</b> items in your cart.
		</p>
		<button>Checkout</button>
	</section>
)

CartSection.propTypes = {
	numOfItems: PropTypes.number.isRequired
}

export default CartSection
