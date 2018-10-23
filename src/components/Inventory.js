import React from 'react'
import Product from './Product'

const Inventory = ({ products, vendorName }) => (
	<div id="inventory">
		<h2>Inventory</h2>
		<p>{vendorName}</p>
		{products.map((product) => (
			<div key={product.productId}>
				<Product
					productName={product.productName}
					price={product.price}
					available={product.available}
				/>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
		))}
		<button>
			<b>Add new product</b>
		</button>
	</div>
)

export default Inventory
