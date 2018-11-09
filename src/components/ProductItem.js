import React from 'react'
import PropTypes from 'prop-types'
// import Product from './Product'

const ProductItem = ({ product, actions, disabled }) => (
	<div id="product-item">
		{product}
		{actions.map((action) => (
			<button
				key={action.label}
				onClick={action.onClick}
				disabled={action.disabled}
			>
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
			// onclick: PropTypes.func.isRequired,
			// disabled: PropTypes.bool
		})
	)
}

export default ProductItem
