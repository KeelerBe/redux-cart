import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import ProductFormContainer from '../containers/ProductFormContainer'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
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
		return ReactDOM.createPortal(this.props.children, this.container)
	}
}

Modal.propTypes = {
	closeForm: PropTypes.func.isRequired
}

export default Modal
