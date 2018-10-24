import React from 'react'
import { Formik, Form, Field } from 'formik'

const ProductForm = () => (
	<div id="product-form">
		<Formik>
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
							<button>Cancel</button>
							<button type="submit">Add</button>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	</div>
)

export default ProductForm
