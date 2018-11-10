import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStoreProducts } from '../reducers'
import { getCurrentUserName } from '../reducers/users'
import { getCartProductIds } from '../reducers/cart'
import { addToCart } from '../actions'
import Greeting from '../components/sections/ProductsSection'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const ProductsContainer = ({
	userName,
	products,
	cartProductIds,
	addToCart
}) => (
	<div>
		<ProductsList title="Products" section={<Greeting userName={userName} />}>
			{products.map((product) => (
				<ProductItem
					key={product.productId}
					product={
						<Product
							productName={product.productName}
							price={product.price}
							vendorName={product.vendorName}
						/>
					}
					actions={[
						{
							label: product.available < 1 ? 'Sold out' : 'Add to Cart',
							onClick: () => addToCart(product.productId),
							disabled:
								product.available < 1 ||
								cartProductIds.includes(product.productId)
						}
					]}
				/>
			))}
		</ProductsList>
	</div>
)

ProductsContainer.propTypes = {
	userName: PropTypes.string,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			vendorName: PropTypes.string.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	products: getStoreProducts(state),
	userName: getCurrentUserName(state.users),
	cartProductIds: getCartProductIds(state.cart)
})

export default connect(
	mapStateToProps,
	{ addToCart }
)(ProductsContainer)
