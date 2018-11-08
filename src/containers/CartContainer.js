import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../reducers'
import { getNumOfItems } from '../reducers/cart'
import { removeFromCart } from '../actions'
import { renderCartSummary } from '../components/sections'
import { renderTotal } from '../components/subheadings'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const CartContainer = ({ numOfItems, total, products, removeFromCart }) => (
	<ProductsList
		title="Cart"
		section={renderCartSummary(numOfItems)}
		subheading={renderTotal(total)}
	>
		{products.map((product) => (
			<ProductItem
				key={product.productId}
				product={
					<Product
						productName={product.productName}
						price={product.price}
						quantity={product.quantity}
					/>
				}
				actions={[
					{ label: 'Remove', onClick: () => removeFromCart(product.productId) }
				]}
			/>
		))}
	</ProductsList>
)

CartContainer.propTypes = {
	numOfItems: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	products: getCartProducts(state),
	numOfItems: getNumOfItems(state.cart),
	total: getTotal(state)
})

export default connect(
	mapStateToProps,
	{ removeFromCart }
)(CartContainer)
