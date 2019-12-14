import React from 'react'
import PropTypes from 'prop-types'
import ContactPreview from './ContactPreview'
import AddContactPreview from './AddContactPreview'

const ContactList = props => {
  const toggleFavorite = id => props.toggleFavorite(id)
  const deleteContact = id => props.deleteContact(id)
  const filterContactsByName = (contacts, filter) => contacts.filter(con => con.name.toLowerCase().includes(filter.toLowerCase()))
  const sortContactsByName = (contacts) => contacts.sort((curr, next) => (curr.name.toLowerCase() > next.name.toLowerCase()) ? 1 : -1)

  const { contacts, filter } = props
  const filteredContacts = filterContactsByName(contacts, filter)
  // TODO: optimise - first filter contacts by favorites then filter by props.filter instead of filtering all contacts by props.filter and then filtering !favorite contacts
  
  return (
    <main id="contacts">
      {!!filter && <p className="contacts--info">{filteredContacts.length} contacts found...</p>}
      {props.isPathAll && <AddContactPreview />}
      {
      sortContactsByName(!!filter ? filteredContacts : contacts).map(
        con => 
          <ContactPreview
            key={con.id}
            id={con.id}
            name={con.name}
            image={con.image}
            isFavorite={con.isFavorite}
            toggleFavorite={toggleFavorite}
            deleteContact={deleteContact}
          />
        )
      }
    </main>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
  toggleFavorite:PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  isPathAll: PropTypes.bool.isRequired
}

export default ContactList