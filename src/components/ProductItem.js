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
	product: PropTypes.node.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired
			// onclick: PropTypes.func.isRequired
		})
	)
}

export default ProductItem
