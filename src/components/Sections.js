import React from 'react'
import AddNewProductButton from './AddNewProductButton'

export const renderGreeting = (userName) => (
	<section>
		<p>
			Hello, <b>{userName || 'user'}</b>!
		</p>
		<button>{userName ? 'Sign out' : 'Sign in'}</button>
	</section>
)

export const renderCartSummary = (numOfItems) => (
	<section>
		<p>
			There are <b>{numOfItems}</b> items in your cart.
		</p>
		<button>Checkout</button>
	</section>
)

export const renderAddNewProductButton = () => <AddNewProductButton />
