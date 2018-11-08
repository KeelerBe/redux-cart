import React from 'react'
import PropTypes from 'prop-types'
import QuantityField from './QuantityField'

const Product = ({ productName, price, available, quantity, vendorName }) => (
	<div>
		<li>
			<b>Product Name: </b>
			{productName}
		</li>
		<li>
			<b>Price: </b>
			&#36;
			{(price / 100).toFixed(2)}
		</li>
		{available ? (
			<li>
				<b>Available: </b>
				{available}
			</li>
		) : null}
		{quantity ? (
			<li>
				<b>Quantity: </b>
				<QuantityField />
			</li>
		) : null}
		{vendorName ? (
			<li>
				<b>Vendor: </b>
				{vendorName}
			</li>
		) : null}
	</div>
)

Product.propTypes = {
	productName: PropTypes.string,
	price: PropTypes.number,
	available: PropTypes.number,
	quantity: PropTypes.number,
	vendorName: PropTypes.string
}

export default Product
