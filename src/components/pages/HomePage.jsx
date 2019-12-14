import React from 'react'
import PropTypes from 'prop-types'
import HomeNavigation from '../navigations/HomeNavigation'
import ContactList from '../previews/ContactList'
import Footer from '../shared/Footer'
import contactsStore from '../../fakeApi/store';

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contacts: [],
      filter: ""
    }
    this.deleteContact = this.deleteContact.bind(this)
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange = updatedFilter => this.setState({ filter: updatedFilter })

  toggleFavorite = id => {
    const contacts = this.state.contacts
    const i = contacts.findIndex(con => con.id === id)

    const updatedContact = Object.assign({}, contacts[i], {"isFavorite": !contacts[i].isFavorite})
    
    contactsStore.update(updatedContact).then(
      data => this.setState({ contacts: data })
    )
  }

  deleteContact = id => {
    contactsStore.remove(id).then(
      data => this.setState({ contacts: data })
    )
  }

  componentDidMount () {
    contactsStore.fetchData().then(data => 
      this.setState({
        isLoading: false,
        contacts: data
      })
    )
  }

  componentDidUpdate (prevProps) {
    const currPath = this.props.location.pathname
    const prevPath = prevProps.location.pathname
    if ((currPath !== "/contacts/all" && currPath !== "/contacts/favorites") && (prevPath === "/contacts/all" || prevPath === "/contacts/favorites")) this.setState({filter: "" })
  }

  render () {
    const isPathAll = this.props.match.url === "/contacts/all"
    const { contacts, filter } = this.state
    const filteredContacts = contacts.filter(con => con.isFavorite)
    
    return (
      <div>
        <HomeNavigation handleInputChange={this.handleInputChange} filter={filter} />
        <ContactList
          contacts={isPathAll ? contacts : filteredContacts}
          filter={filter}
          deleteContact={this.deleteContact} 
          toggleFavorite={this.toggleFavorite} 
          isPathAll={isPathAll}
        />
        {!filter && <Footer contactsLength={isPathAll ? contacts.length : filteredContacts.length} />}
      </div>
    )
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default HomePage