import React from 'react'
import PropTypes from 'prop-types'
import { renderAddNewProductButton } from '../components/Sections'
import { renderCompanyName } from '../components/Subheadings'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const InventoryContainer = ({
	vendorName,
	products,
	onEditClick,
	onDeleteClick
}) => (
	<ProductsList
		title="Inventory"
		subheading={renderCompanyName(vendorName)}
		section={renderAddNewProductButton()}
	>
		{products.map((product) => (
			<ProductItem
				key={product.productId}
				product={
					<Product
						productName={product.productName}
						price={product.price}
						available={product.available}
					/>
				}
				actions={[
					{ label: 'Edit', onClick: onEditClick },
					{ label: 'Delete', onClick: onDeleteClick }
				]}
			/>
		))}
	</ProductsList>
)

InventoryContainer.propTypes = {
	vendorName: PropTypes.string.isRequired,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			available: PropTypes.number.isRequired
		})
	).isRequired
}

export default InventoryContainer
