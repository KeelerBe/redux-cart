import React, { Component } from 'react'

class QuantityField extends Component {
	state = {
		quantity: 1
	}

	decrementQuantity = () => {
		if (this.state.quantity <= 1) return
		this.setState((prevState) => ({
			quantity: prevState.quantity - 1
		}))
	}

	incrementQuantity = () =>
		this.setState((prevState) => ({
			quantity: prevState.quantity + 1
		}))

	render() {
		return (
			<div id="quantity">
				<button type="button" onClick={this.decrementQuantity}>
					-
				</button>
				<p> {this.state.quantity} </p>
				<button type="button" onClick={this.incrementQuantity}>
					+
				</button>
			</div>
		)
	}
}

export default QuantityField
