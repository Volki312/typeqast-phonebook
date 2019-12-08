import React from 'react'
import ContactPreview from './previews/ContactPreview'
import AddContactPreview from './previews/AddContactPreview'

const ContactList = (props) => {
  const contacts = props.contacts
  const filter = props.filter
  
  const filterContactsByName = (contacts, filter) => {
    return contacts.filter(con => con.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const filterFavoriteContacts = (contacts, filter) => {
    return contacts.filter(con => !con.isFavorite)
  }

  const sortContactsByName = (contacts) => {
    return contacts.sort((curr, next) => (curr.name > next.name) ? 1 : -1)
  }

  const renderContact = (contact) => {
    return (<ContactPreview
      key={contact.id}
      profile={contact.profile}
      name={contact.name}
      isFavorite={contact.isFavorite}
      id={contact.id}
    />)
  }

  const filteredContacts = filterContactsByName(contacts, filter)
  // TODO: optimise - first filter contacts by favorites then filter by props.filter instead of filtering all contacts by props.filter and then filtering !favorite contacts
  
  return (
    <main id="contacts">
      {
        filter && 
        (props.match.url === "/contacts/all"
        ?
        <p className="contacts--info">{filteredContacts.length} contacts found...</p>
        :
        <p className="contacts--info">{filterFavoriteContacts(filteredContacts).length} favorite contacts found...</p>)
      }
      {props.match.url === "/contacts/all" && <AddContactPreview />}

      {
        // Spaghetti code demonstration
        sortContactsByName(props.match.url === "/contacts/all" ? filteredContacts : filterFavoriteContacts(filteredContacts)).map((con) => renderContact(con))
      }
    </main>
  )
}

export default ContactList