import React from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import LoadingSpinner from '../shared/LoadingSpinner'
import contactsStore from '../../fakeApi/store';

class EditContactPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contact: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  handleSubmit = contact => {
    const { isFavorite, id } = this.state.contact
    const updatedContact = {...contact, isFavorite: isFavorite, id: id}

    contactsStore.update(updatedContact).then(
      data => this.props.history.push("/contacts/all")
    )
  }

  deleteContact = id => {
    contactsStore.remove(id).then(
      data => this.props.history.push("/contacts/all")
    )
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    contactsStore.get(id).then(data => 
      data ?
      this.setState({
        contact: {...data}, 
        isLoading: false
      }) :
      this.props.history.push("/contacts/ContactNotFound")
    )
  }

  render() {
    const { match } = this.props
    const { isLoading, contact } = this.state
    
    return (
      <div>
        <CrudNavigation match={match} deleteContact={this.deleteContact} id={parseInt(match.params.id)} />
        <main>
          {
          isLoading ?
          <LoadingSpinner /> :
          <ContactForm contact={contact} handleSubmit={this.handleSubmit} />
          }
        </main>
      </div>
    )
  }
}

EditContactPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default EditContactPage