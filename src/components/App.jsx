import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Header from './shared/Header'
import HomePage from './pages/HomePage'
import AddContactPage from './pages/AddContactPage'
import EditContactPage from './pages/EditContactPage'
import ContactDetailsPage from './pages/ContactDetailsPage'
import Page404 from './pages/Page404'

class App extends React.Component {
  render() {

    return (
      <div>
        { /* Shared across the pages*/}
        <Route path="/" component={Header} />
                
        { /* Switch between pages */ }
        <Switch>
          <Route exact path="/contacts/(all|favorites)" component={HomePage} />
          <Route exact path="/contacts/add" component={AddContactPage} />} />
          <Route exact path="/contacts/edit/:id" component={EditContactPage} />
          <Route exact path="/contacts/details/:id" component={ContactDetailsPage} />
          <Route exact path="(/|/contacts)" render={() => <Redirect to="/contacts/all" />} />
          <Route component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
