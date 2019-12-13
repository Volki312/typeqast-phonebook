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
            "label": "label"
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
        <main className="contact--details">
          <div className="details--row details--row-title">
            <img src={contact.image || "https://i.ibb.co/80WvdvX/placeholder.png"} alt="profile" className="details--image" />
            <h2>{contact.name}</h2>
          </div>

          <div className="details--body">
            <div className="details--row">
              <div className="details--column">
                <FontAwesomeIcon icon={faEnvelope} className="details--group-title" />
              </div>
              <div className="details--column">
                <p className="details--group-title">email</p>
                <p className="details--email">{contact.email}</p>
              </div>
            </div>
          
            <div className="details--row">
              <div className="details--column">
                <FontAwesomeIcon icon={faMobileAlt} className="details--group-title" />
              </div>
              <div className="details--column">
                <p className="details--group-title">numbers</p>
                <div>
                  {
                    contact.numbers.map((num, i) => {
                      return (
                        <div key={i} className="details--row">
                          <p className="details--number-label">{num.label.toUpperCase()}</p>
                          <p><u>{num.number}</u></p>
                        </div>
                      )}
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default ContactDetailsPage
