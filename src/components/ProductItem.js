import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, actions }) => (
	<div id="product-item">
		<Product
			productName={product.productName}
			price={product.price}
			vendorName={product.vendorName}
			quantity={product.quantity}
			available={product.available}
		/>
		{actions.map((action) => (
			<button key={action.label} onClick={action.onClick}>
				{action.label}
			</button>
		))}
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		productName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		vendorName: PropTypes.string,
		quantity: PropTypes.number
	}).isRequired
}

export default ProductItem
