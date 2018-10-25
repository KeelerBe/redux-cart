import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ProductForm from './ProductForm'

const modalRoot = document.getElementById('modal-root')

class ProductFormModal extends Component {
	constructor(props) {
		super(props)
		this.container = document.createElement('div')
	}

	componentDidMount() {
		modalRoot.appendChild(this.container)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.container)
	}

	render() {
		return ReactDOM.createPortal(
			<ProductForm onCancelClick={this.props.onCancelClick} />,
			this.container
		)
	}
}

ProductFormModal.propTypes = {
	onCancelClick: PropTypes.func.isRequired
}

export default ProductFormModal
