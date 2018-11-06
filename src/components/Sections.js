import React from 'react'
import ProductFormModal from './ProductFormModal'

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
			There are <b>{numOfItems || 0}</b> items in your cart.
		</p>
		<button>Checkout</button>
	</section>
)

class AddNewProductButton extends React.Component {
  state = { showModal: false }

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
  }
  
  render() {
    return (
      <section>
        <button onClick={this.toggleModal}>
          <b>Add new product</b>
        </button>
        {this.state.showModal && (
          <ProductFormModal onCancelClick={this.toggleModal} />
        )}
      </section>
    )
  }
}

export const renderButton = () => <AddNewProductButton/>