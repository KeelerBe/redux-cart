import React from 'react'
import PropTypes from 'prop-types'

const renderGreeting = (userName) => (
	<section>
		<p>
			Hello, <b>{userName || 'user'}</b>!
		</p>
		<button>{userName ? 'Sign out' : 'Sign in'}</button>
	</section>
)

const ProductsList = ({ userName, children }) => (
	<div id="products-list">
		<h2>Products</h2>
		{renderGreeting(userName)}
		{children}
	</div>
)

ProductsList.propTypes = {
	userName: PropTypes.string,
	children: PropTypes.node
}

export default ProductsList
