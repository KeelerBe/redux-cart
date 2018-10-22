import React from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import Orders from './components/Orders'

const App = () => (
	<div id="main">
		<Products />
		<Inventory />
		<Cart />
		<Orders />
	</div>
)

export default App
