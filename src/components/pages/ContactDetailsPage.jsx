import React from 'react'
import CrudNavigation from '../shared/CrudNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

class ContactDetailsPage extends React.Component {
  constructor() {
    super()
    this.state = {
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
        "profile": "#"
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    const contact = contacts.find(con => con.id.toString() === id)

    this.setState({ contact: contact })
  }

  render () {
    const contact = this.state.contact

    return (
      <div>

        <CrudNavigation match={this.props.match} isFavorite={contact.isFavorite} id={contact.id}/>
        <div className="contact-details">

          <div className="row">
            <img src={contact.profile} alt="profile"/>
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

        </div>
      </div>
    )
  }
}

export default ContactDetailsPage