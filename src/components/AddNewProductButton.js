import React from 'react'
import ProductFormModal from './ProductFormModal'

class AddNewProductButton extends React.Component {
	state = { showModal: false }

	openForm = () => this.setState({ showModal: true })
	closeForm = () => this.setState({ showModal: false })

	render() {
		return (
			<section id="modal">
				<button onClick={this.openForm}>
					<b>Add new product</b>
				</button>
				{this.state.showModal && (
					<ProductFormModal closeForm={this.closeForm} />
				)}
			</section>
		)
	}
}

export default AddNewProductButton
