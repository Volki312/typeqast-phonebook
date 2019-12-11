import React from 'react'
import ContactPreview from './previews/ContactPreview'
import AddContactPreview from './previews/AddContactPreview'

const ContactList = (props) => {
  const contacts = props.contacts
  const filter = props.filter
  
  const toggleFavorite = (id) => {
    props.toggleFavorite(id)
  }

  const deleteContact = (id) => {
    props.deleteContact(id)
  }

  const filterContactsByName = (contacts, filter) => {
    return contacts.filter(con => con.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const sortContactsByName = (contacts) => {
    const sortedContacts = contacts.sort((curr, next) => (curr.name.toLowerCase() > next.name.toLowerCase()) ? 1 : -1)
    return sortedContacts
  }

  const filteredContacts = filterContactsByName(contacts, filter)
  // TODO: optimise - first filter contacts by favorites then filter by props.filter instead of filtering all contacts by props.filter and then filtering !favorite contacts
  
  return (
    <main id="contacts">
    {filter && <p className="contacts--info">{filteredContacts.length} contacts found...</p>}
    {props.isPathAll && <AddContactPreview />}
    {
    sortContactsByName(filter ? filteredContacts : contacts).map(con => 
      <ContactPreview
        key={con.id}
        id={con.id}
        name={con.name}
        image={con.image}
        isFavorite={con.isFavorite}
        toggleFavorite={toggleFavorite}
        deleteContact={deleteContact}
      />)
    }
    </main>
  )
}

export default ContactList