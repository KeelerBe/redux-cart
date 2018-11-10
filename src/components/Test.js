import React, { Component } from 'react'

class Test extends Component {
  state = { showModal: false }

	openForm = () => this.setState({ showModal: true })
	closeForm = () => this.setState({ showModal: false })

  render() {
    return this.props.render({
      ...this.state,
      actions: {
        openForm: this.openForm,
        closeForm: this.closeForm
      }
    })
  }
}

export default Test