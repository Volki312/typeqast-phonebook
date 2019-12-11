import React from 'react'
import CrudNavigation from '../navigations/CrudNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import contactsStore from '../../fakeApi/store';

class ContactDetailsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      contact: {
        "id": 0,
        "name": "name",
        "email": "email",
        "numbers": [
          {
            "number": "number",
            "description": "description"
          }
        ],
        "isFavorite": true,
        "image": "#"
      }
    }
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    contactsStore.get(id).then(data => 
      data ?
      this.setState({
        isLoading: false,
        contact: data
      })
      :
      this.props.history.push("/contacts/ContactNotFound")
    )
  }

  render () {
    const contact = this.state.contact

    return (
      <div>

        <CrudNavigation match={this.props.match} isFavorite={contact.isFavorite} id={contact.id}/>
        <main className="contact-details">

          <div className="row">
            <img src={contact.image || "http://placehold.it/64xd64"} alt="profile"/>
            <h2>{contact.name}</h2>
          </div>

          <div className="row">
            <div className="column">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="column">
              <h3>email</h3>
              <p>{contact.email}</p>
            </div>
          </div>
        
          <div className="row">
            <div className="column">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div className="column">
              <h3>numbers</h3>
              {
                contact.numbers.map((num, i) => {
                  return (
                    <div className="row" key={i}>
                      <p>{num.description}</p>
                      <p>{num.number}</p>
                    </div>
                  )}
                )
              }
            </div>
          </div>

        </main>
      </div>
    )
  }
}

export default ContactDetailsPage
