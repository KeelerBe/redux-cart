import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'

const ProductForm = ({ closeModal, onSubmit }) => (
	<Fragment>
		<div id="modal-overlay" />
		<div id="product-form">
			<Formik
				initialValues={{
					productName: '',
					price: undefined,
					available: undefined
				}}
				onSubmit={(values, { resetForm }) => {
					onSubmit(values)
					resetForm({})
					closeModal()
				}}
			>
				{() => (
					<div>
						<Form>
							<div>
								<label htmlFor="productName">Product Name</label>
								<Field id="productName" name="productName" type="text" />
							</div>
							<div>
								<label htmlFor="price">Price</label>
								<Field id="price" name="price" type="number" />
							</div>
							<div>
								<label htmlFor="available">Available</label>
								<Field id="available" name="available" type="number" />
							</div>
							<div>
								<button type="button" onClick={closeModal}>
									Cancel
								</button>
								<button type="submit">Add</button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	</Fragment>
)

ProductForm.propTypes = {
	closeModal: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default ProductForm
