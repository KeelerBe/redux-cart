import React from 'react'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'

const CartContainer = ({ products, numOfItems }) => (
	<Cart numOfItems={numOfItems || 0}>
		{products.map((product) => (
			<CartItem key={product.productId} product={product} />
		))}
	</Cart>
)

CartContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		})
	).isRequired,
	numOfItems: PropTypes.number
}

export default CartContainer
