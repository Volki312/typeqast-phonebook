import React from 'react'
import HomeNavigation from '../navigations/HomeNavigation'
import ContactList from '../ContactList'
import Footer from '../shared/Footer'

const HomePage = (props) => {
  const contacts = props.contacts
  const favoriteContacts = props.contacts.filter(con => con.isFavorite)
  const isPathAll = props.match.url === "/contacts/all"
  
  const toggleFavorite = (id) => {
    props.toggleFavorite(id)
  }

  const deleteContact = (id) => {
    props.deleteContact(id)
  }

  return (
    <div>
      <HomeNavigation updateFilter={props.updateFilter} filter={props.filter}/>
      {<ContactList contacts={isPathAll ? contacts : favoriteContacts} filter={props.filter} deleteContact={deleteContact} toggleFavorite={toggleFavorite} isPathAll={isPathAll}/>}
      {<Footer numberOfContacts={isPathAll ? contacts.length : favoriteContacts.length} isFiltered={props.filter}/>}
    </div>
  )
}

export default HomePage