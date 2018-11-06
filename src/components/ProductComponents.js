import React from 'react'

export const renderGreeting = (userName) => (
	<section>
		<p>
			Hello, <b>{userName || 'user'}</b>!
		</p>
		<button>{userName ? 'Sign out' : 'Sign in'}</button>
	</section>
)
