import React from 'react'
import ProductFormModal from './ProductFormModal'

class AddNewProductButton extends React.Component {
	state = { showModal: false }

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	render() {
		return (
			<section id="modal">
				<button onClick={this.toggleModal}>
					<b>Add new product</b>
				</button>
				{this.state.showModal && (
					<ProductFormModal onCancelClick={this.toggleModal} />
				)}
			</section>
		)
	}
}

export default AddNewProductButton
