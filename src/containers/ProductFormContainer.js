import React from 'react'
import { connect } from 'react-redux'
import { startAddNewProduct } from '../actions'
import ProductForm from '../components/ProductForm'

const ProductFormContainer = ({ closeForm, startAddNewProduct }) => (
	<ProductForm closeForm={closeForm} onSubmit={startAddNewProduct} />
)

export default connect(
	null,
	{ startAddNewProduct }
)(ProductFormContainer)
