import React from 'react'
import MainNavigation from '../shared/MainNavigation'
import ContactList from '../ContactList'
import Footer from '../shared/Footer'

const HomePage = (props) => {

  return (
    <div>
      <MainNavigation updateFilter={props.updateFilter} filter={props.filter}/>
      <ContactList match={props.match} contacts={props.contacts} filter={props.filter}/>
      <Footer numberOfContacts={props.contacts.length} isFiltered={props.filter}/>
    </div>
  )
}

export default HomePage