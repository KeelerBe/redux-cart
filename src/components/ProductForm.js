import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'

const ProductForm = ({ onCancelClick }) => (
	<Fragment>
		<div id="modal-overlay" />
		<div id="product-form">
			<Formik
				initialValues={{
					productName: '',
					price: '',
					available: ''
				}}
				onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
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
								<button onClick={onCancelClick}>Cancel</button>
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
	onCancelClick: PropTypes.func.isRequired
}

export default ProductForm
