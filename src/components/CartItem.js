import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const CartItem = ({ product, quantity, label }) => (
	<div>
		<Product
			productName={product.productName}
			price={product.price}
			quantity={quantity || 1}
		/>
		<button>{label}</button>
	</div>
)

CartItem.propTypes = {
	product: PropTypes.shape({
		productName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired,
	quantity: PropTypes.number
}

export default CartItem
