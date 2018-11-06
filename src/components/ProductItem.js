import React from 'react'
import PropTypes from 'prop-types'
// import Product from './Product'

const ProductItem = ({ product, actions }) => (
	<div id="product-item">
		{product}
		{actions.map((action) => (
			<button key={action.label} onClick={action.onClick}>
				{action.label}
			</button>
		))}
	</div>
)

ProductItem.propTypes = {
	// product: PropTypes.shape({
	// 	productName: PropTypes.string.isRequired,
	// 	price: PropTypes.number.isRequired,
	// 	vendorName: PropTypes.string,
	// 	quantity: PropTypes.number
	// }).isRequired
}

export default ProductItem
