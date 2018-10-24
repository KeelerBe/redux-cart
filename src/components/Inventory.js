import React from 'react'
import PropTypes from 'prop-types'

const Inventory = ({ children, vendorName }) => (
	<div id="inventory">
		<h2>Inventory</h2>
		<p>{vendorName}</p>
		<section>
			<button>
				<b>Add new product</b>
			</button>
		</section>
		{children}
	</div>
)

Inventory.propTypes = {
	children: PropTypes.node,
	vendorName: PropTypes.string.isRequired
}

export default Inventory
