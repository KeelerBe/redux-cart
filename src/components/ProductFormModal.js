import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ProductFormContainer from '../containers/ProductFormContainer'

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
			<ProductFormContainer closeForm={this.props.closeForm} />,
			this.container
		)
	}
}

ProductFormModal.propTypes = {
	closeForm: PropTypes.func.isRequired
}

export default ProductFormModal
