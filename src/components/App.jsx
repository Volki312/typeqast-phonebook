import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import mockContacts from './db'
import Header from './shared/Header'
import HomePage from './pages/HomePage'
import AddContactPage from './pages/AddContactPage'
import EditContactPage from './pages/EditContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import Page404 from './pages/Page404'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contacts: [],
      filter: ""
    }
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
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
  }

  deleteContact = (contactId) => {
    const contacts = this.state.contacts
    const i = contacts.findIndex(con => con.id === contactId)

    const updatedContacts = [...contacts.slice(0, i), ...contacts.slice(i + 1)]
    
    console.log(updatedContacts)
    this.setState({contacts: updatedContacts})
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
  }

  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(mockContacts))
    this.setState({
      isLoading: false,
      contacts: JSON.parse(localStorage.getItem('contacts'))
    })
  }

  //Reset filter input after changing route from /contacts/all
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

          <Route exact path="/contacts/add" component={AddContactPage} />
          {
          // TODO: On these two routes, check if contact with said id exists, if not -> redirect to page404 no such contact exists 
          }
          <Route exact path="/contacts/edit/:id" component={EditContactPage} />
          <Route exact path="/contacts/details/:id" render={(props) => <ContactDetailsPage {...props}/>} />
          <Route component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
