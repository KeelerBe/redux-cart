import React from 'react'

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

export default Product
