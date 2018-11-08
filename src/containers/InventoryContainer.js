import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInventoryProducts } from '../reducers'
import { getVendorName } from '../reducers/users'
import { renderAddNewProductButton } from '../components/sections'
import { renderCompanyName } from '../components/subheadings'
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
		section={renderAddNewProductButton()}
		subheading={renderCompanyName(vendorName)}
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

const mapStateToProps = (state) => ({
	products: getInventoryProducts(state),
	vendorName: getVendorName(state.users)
})

export default connect(mapStateToProps)(InventoryContainer)
