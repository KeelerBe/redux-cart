import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product }) => (
	<div id="product-item">
		<Product
			productName={product.productName}
			price={product.price}
			available={product.available}
			vendorName={product.userId}
		/>
		<button>Add to cart</button>
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		productName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		available: PropTypes.number.isRequired,
		userId: PropTypes.string.isRequired
	}).isRequired
}

export default ProductItem
