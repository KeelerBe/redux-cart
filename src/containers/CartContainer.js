import React from 'react'
import PropTypes from 'prop-types'
import { renderCartSummary } from '../components/Sections'
import { renderTotal } from '../components/Subheadings'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const CartContainer = ({ products, numOfItems, onClick }) => (
	<ProductsList
		title="Cart"
		section={renderCartSummary(numOfItems)}
		subheading={renderTotal()}
	>
		{products.map((product) => (
			<ProductItem
				key={product.productId}
				product={
					<Product
						productName={product.productName}
						price={product.price}
						quantity={product.quantity || 1}
					/>
				}
				actions={[{ label: 'Remove', onClick: onClick }]}
			/>
		))}
	</ProductsList>
)

CartContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
			// quantity: PropTypes.number.isRequired
		})
	).isRequired,
	numOfItems: PropTypes.number
}

export default CartContainer
