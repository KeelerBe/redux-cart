import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, actions }) => (
	<div id="product-item">
		<Product
			productName={product.productName}
			price={product.price}
			vendorName={product.vendorName}
			quantity={product.quantity}
		/>
		{actions.map((action) => (
			<button key={action.label} onClick={action.onClick}>
				{action.label}
			</button>
		))}
		{/* {console.log(actions.map((action) => action.label))} */}
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		productName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		vendorName: PropTypes.string,
		quantity: PropTypes.number
	}).isRequired
}

export default ProductItem
