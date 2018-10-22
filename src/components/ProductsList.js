import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ children }) => (
	<div id="products">
		<h2>Products</h2>
		{children}
	</div>
)

ProductsList.propTypes = {
	children: PropTypes.node
}

export default ProductsList
