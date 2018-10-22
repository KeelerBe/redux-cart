import React from 'react'
import PropTypes from 'prop-types'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'

const ProductsContainer = ({ products }) => (
	<div>
		<ProductsList>
			{products.map((product) => (
				<ProductItem key={product.productId} product={product} />
			))}
		</ProductsList>
	</div>
)

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			available: PropTypes.number.isRequired,
			vendorName: PropTypes.string.isRequired
		})
	).isRequired
}

export default ProductsContainer
