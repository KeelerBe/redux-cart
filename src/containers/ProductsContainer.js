import React from 'react'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'

// temp:
import _products from '../api/products.json'
const products = Object.keys(_products).map((key) => _products[key])

const ProductsContaineer = () => (
	<div>
		<ProductsList>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ProductsList>
	</div>
)

export default ProductsContaineer
