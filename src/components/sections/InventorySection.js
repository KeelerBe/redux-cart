import React from 'react'
import AddNewProductButton from '../AddNewProductButton'
import Modal from '../Modal'
import ProductFormContainer from '../../containers/ProductFormContainer'
import ProductForm from '../ProductForm'

class ModalHandler extends React.Component {
	state = { showModal: false }

	openModal = () => this.setState({ showModal: true })
	closeModal = () => this.setState({ showModal: false })

	render() {
		return (
			<section id="modal">
				<AddNewProductButton onClick={this.openModal} />
				{this.state.showModal && (
					<Modal>
						<ProductFormContainer>
							{(startAddNewProduct) => (
								<ProductForm
									closeModal={this.closeModal}
									onSubmit={startAddNewProduct}
								/>
							)}
						</ProductFormContainer>
					</Modal>
				)}
			</section>
		)
	}
}

export default ModalHandler
