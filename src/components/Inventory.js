import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductFormModal from './ProductFormModal'

class Inventory extends Component {
	state = { showModal: false }

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	render() {
		const { vendorName, children } = this.props
		return (
			<div id="inventory">
				<h2>Inventory</h2>
				<p>{vendorName}</p>
				<section>
					<button onClick={this.toggleModal}>
						<b>Add new product</b>
					</button>
					{this.state.showModal && (
						<ProductFormModal onCancelClick={this.toggleModal} />
					)}
				</section>
				{children}
			</div>
		)
	}
}

Inventory.propTypes = {
	children: PropTypes.node,
	vendorName: PropTypes.string.isRequired
}

export default Inventory
