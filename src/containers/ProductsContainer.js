import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStoreProducts } from '../reducers'
import { getCurrentUserName } from '../reducers/users'
import { renderGreeting } from '../components/Sections'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const ProductsContainer = ({ products, userName, onClick }) => (
	<div>
		<ProductsList title="Products" section={renderGreeting(userName)}>
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
					actions={[{ label: 'Add to Cart', onClick: onClick }]}
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
	userName: getCurrentUserName(state.users)
})

export default connect(mapStateToProps)(ProductsContainer)
