import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const InventoryItem = ({ product }) => (
	<div>
		<Product
			productName={product.productName}
			price={product.price}
			available={product.available}
		/>
		<div>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	</div>
)

InventoryItem.propTypes = {
	product: PropTypes.shape({
		productName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		available: PropTypes.number.isRequired
	})
}

export default InventoryItem
