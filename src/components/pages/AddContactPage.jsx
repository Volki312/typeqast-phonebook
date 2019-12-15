import React from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import contactsStore from '../../fakeApi/store';

const AddContactPage = props => {
  const handleSubmit = contact => {
    contactsStore.create(contact).then(
      data => props.history.push("/contacts/all")
    )
  }

  return (
    <div>
      <CrudNavigation match={props.match} />
      <main>
        <ContactForm handleSubmit={handleSubmit} />
      </main>
    </div>
  )
}

AddContactPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default AddContactPage