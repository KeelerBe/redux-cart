import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startAddNewProduct } from '../actions'

const ProductFormContainer = ({ startAddNewProduct, children }) =>
	children(startAddNewProduct)

ProductFormContainer.propTypes = {
	startAddNewProduct: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default connect(
	null,
	{ startAddNewProduct }
)(ProductFormContainer)
