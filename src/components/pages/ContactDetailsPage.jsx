import React from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import contactsStore from '../../fakeApi/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

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
      !!data ?
      this.setState({
        isLoading: false,
        contact: data
      }) :
      this.props.history.push("/contacts/ContactNotFound")
    )
  }

  render () {
    const { contact } = this.state

    return (
      <div>
        <CrudNavigation match={this.props.match} isFavorite={contact.isFavorite} id={contact.id} />

        <main className="contact--details">
          <div className="details--row details--row-title">
            <img src={contact.image || "https://i.ibb.co/80WvdvX/placeholder.png"} alt="profile" className="details--image" />
            <h2>{contact.name}</h2>
          </div>

          <div className="details--body">
            { !!contact.email &&
              <div className="details--row">
              <div className="details--column">
                <FontAwesomeIcon icon={faEnvelope} className="details--group-title" />
              </div>
              <div className="details--column">
                <p className="details--group-title">email</p>
                <p className="details--email">{contact.email}</p>
              </div>
            </div>
            }
          
            {
              (!!contact.numbers && contact.numbers.length > 0) &&
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
            }
          </div>
        </main>
      </div>
    )
  }
}

ContactDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default ContactDetailsPage
