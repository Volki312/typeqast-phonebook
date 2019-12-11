import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Header from './shared/Header'
import HomePage from './pages/HomePage'
import AddContactPage from './pages/AddContactPage'
import EditContactPage from './pages/EditContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import Page404 from './pages/Page404'
import contactsStore from '../fakeApi/store';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contacts: [],
      filter: ""
    }
    this.deleteContact = this.deleteContact.bind(this)
    this.addContact = this.addContact.bind(this)
    this.editContact = this.editContact.bind(this)
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }
  
  updateFilter = (updatedFilter) => {
    this.setState({ filter: updatedFilter })
  }

  toggleFavorite = (contactId) => {
    const contacts = this.state.contacts
    const i = contacts.findIndex(con => con.id === contactId)

    const updatedContact = Object.assign({}, contacts[i], {"isFavorite": !contacts[i].isFavorite})
    const updatedContacts = Object.assign([], contacts, {[i]: updatedContact})
    
    this.setState({contacts: updatedContacts})
    contactsStore.update(updatedContact)
  }

  addContact = (contact) => {
    contactsStore.create(contact).then(
      data => this.setState({ contacts: data})
    )
  }  
  
  editContact = (contact) => {
    contactsStore.update(contact).then(
      data => this.setState({ contacts: data})
    )
  }

  deleteContact = (contactId) => {
    contactsStore.remove(contactId).then(
      data => this.setState({ contacts: data })
    )
  }

  componentDidMount() {
    contactsStore.fetchData().then(data => 
      this.setState({
        isLoading: false,
        contacts: data
      })
    )
  }

  //Reset filter input after changing route from /contacts/(all|favorites)
  componentDidUpdate(prevProps) {
    const currPath = this.props.location.pathname
    const prevPath = prevProps.location.pathname
    if ((currPath !== "/contacts/all" && currPath !== "/contacts/favorites") && (prevPath === "/contacts/all" || prevPath === "/contacts/favorites")) {
      this.setState( {filter: "" })
    }
  }

  render() {

    return (
      <div>
        { /* Shared across the pages*/}
        <Route path="/" component={Header} />
        
        { /* Redirects */ }
        <Route exact path="(/|/contacts)" render={() => <Redirect to="/contacts/all" />} />
        
        { /* Switch between pages */ }
        <Switch>
          <Route exact path="/contacts/(all|favorites)" render={
            (props) => 
              <HomePage 
                match={props.match} 
                updateFilter={this.updateFilter} 
                deleteContact={this.deleteContact}
                toggleFavorite={this.toggleFavorite} 
                contacts={this.state.contacts} 
                filter={this.state.filter}
              />
          }/>

          <Route exact path="/contacts/add" render={(props) => <AddContactPage {...props} addContact={this.addContact} />} />
          <Route exact path="/contacts/edit/:id" render={(props) => <EditContactPage {...props} deleteContact={this.deleteContact} editContact={this.editContact} />} />
          <Route exact path="/contacts/details/:id" render={(props) => <ContactDetailsPage {...props}/>} />
          <Route component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
