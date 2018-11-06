import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, section, subheading, children }) => (
	<div id="products-list">
		<h2>{title}</h2>
		{subheading}
		{section}
		{children}
	</div>
)

ProductsList.propTypes = {
	title: PropTypes.string.isRequired,
	subheading: PropTypes.node,
	section: PropTypes.node,
	children: PropTypes.node
}

export default ProductsList
