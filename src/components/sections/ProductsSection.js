import React from 'react'

const Greeting = ({ userName }) => (
	<section>
		<p>
			Hello, <b>{userName || 'user'}</b>!
		</p>
		<button>{userName ? 'Sign out' : 'Sign in'}</button>
	</section>
)

export default Greeting
