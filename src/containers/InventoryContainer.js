import React from 'react'
import Inventory from '../components/Inventory'

const InventoryContainer = ({ products, vendorName }) => (
	<Inventory products={products} vendorName={vendorName} />
)

export default InventoryContainer
