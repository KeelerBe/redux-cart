import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ productName, price, available, vendorName }) => (
	<div>
		<li>
			<b>Product: </b>
			{productName}
		</li>
		<li>
			<b>Price: </b>
			{price}
		</li>
		<li>
			<b>Available: </b>
			{available}
		</li>
		<li>
			<b>Vendor: </b>
			{vendorName}
		</li>
	</div>
)

Product.propTypes = {
	productName: PropTypes.string,
	price: PropTypes.number,
	available: PropTypes.number,
	vendorName: PropTypes.string
}

export default Product
