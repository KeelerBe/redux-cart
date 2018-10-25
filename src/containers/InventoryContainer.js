import React from 'react'
import PropTypes from 'prop-types'
import Inventory from '../components/Inventory'
import InventoryItem from '../components/InventoryItem'

const InventoryContainer = ({ products, vendorName }) => (
	<Inventory vendorName={vendorName}>
		{products.map((product) => (
			<InventoryItem key={product.productId} product={product} />
		))}
	</Inventory>
)

InventoryContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			available: PropTypes.number.isRequired
		})
	).isRequired,
	vendorName: PropTypes.string.isRequired
}

export default InventoryContainer
