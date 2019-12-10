import React, { Component } from 'react'
import CrudNavigation from '../navigations/CrudNavigation'

class EditContactPage extends Component {
  constructor() {
    super()

    this.deleteContact = this.deleteContact.bind(this)
  }

  deleteContact = (id) => {
    this.props.deleteContact(id)
    this.props.history.push("/contacts/all")
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <CrudNavigation match={match} deleteContact={this.deleteContact} id={match.params.id} />
      </div>
    )
  }
}

export default EditContactPage