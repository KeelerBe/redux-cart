import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInventoryProducts } from '../reducers'
import { getVendorName } from '../reducers/users'
import ModalHandler from '../components/ModalHandler'
import CompanyName from '../components/subheadings/InventorySubheading'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const onDeleteClick = () => console.log('delete')

const InventoryContainer = ({ vendorName, products }) => (
	<ProductsList
		title="Inventory"
		section={<ModalHandler id="add-new-product" label="Add new product" />}
		subheading={<CompanyName vendorName={vendorName} />}
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
					{ label: 'Edit' },
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
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			available: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	products: getInventoryProducts(state),
	vendorName: getVendorName(state.users)
})

export default connect(
	mapStateToProps
	// { editProduct }
)(InventoryContainer)
