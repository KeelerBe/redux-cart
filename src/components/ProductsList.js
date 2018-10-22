import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ userName, children }) => (
	<div id="products">
		<h2>Products</h2>
		<p>
			Hello, <b>{userName}!</b>
		</p>
		{children}
	</div>
)

ProductsList.propTypes = {
	children: PropTypes.node
}

export default ProductsList
