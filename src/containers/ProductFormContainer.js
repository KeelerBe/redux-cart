import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startAddNewProduct } from '../actions'

const ProductFormContainer = ({ startAddNewProduct, children }) => (
	<Fragment>{children(startAddNewProduct)}</Fragment>
)

ProductFormContainer.propTypes = {
	startAddNewProduct: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired
}

export default connect(
	null,
	{ startAddNewProduct }
)(ProductFormContainer)
