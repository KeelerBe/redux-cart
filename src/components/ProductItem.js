import React from 'react'
import PropTypes from 'prop-types'
import ModalHandler from '../components/ModalHandler'

const ProductItem = ({ product, actions }) => (
	<div id="product-item">
		{product}
		{actions.map(
			(action) =>
				action.label === 'Edit' ? (
					<ModalHandler
						key={action.label}
						id="edit-product"
						label={action.label}
					/>
				) : (
					<button
						key={action.label}
						onClick={action.onClick}
						disabled={action.disabled}
					>
						{action.label}
					</button>
				)
		)}
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.node.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func,
			disabled: PropTypes.bool
		}).isRequired
	)
}

export default ProductItem
