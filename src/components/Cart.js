import React from 'react'
import Product from '../components/Product'

const Cart = ({ products, total }) => (
	<div id="cart">
		<h2>Cart</h2>
		<p>There are x items in your cart.</p>
		<p>Total: $0.00</p>
		{products.map((product) => (
			<div key={product.productId}>
				<Product
					productName={product.productName}
					price={product.price}
					quantity={1}
				/>
				<button>Remove</button>
			</div>
		))}
		<button>Checkout</button>
	</div>
)

export default Cart
