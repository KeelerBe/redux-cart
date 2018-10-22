import React from 'react'
import Product from './Product'

const ProductItem = ({ product }) => (
	<div id="product-item">
		<Product
			productName={product.productName}
			price={product.price}
			available={product.available}
			vendorName={product.userId}
		/>
		<button>Add to cart</button>
	</div>
)

export default ProductItem
