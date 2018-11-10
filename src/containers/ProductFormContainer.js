// import React from 'react'
import { connect } from 'react-redux'
import { startAddNewProduct } from '../actions'
// import ProductForm from '../components/ProductForm'

const ProductFormContainer = ({ startAddNewProduct, children }) =>
	children(startAddNewProduct)

export default connect(
	null,
	{ startAddNewProduct }
)(ProductFormContainer)
