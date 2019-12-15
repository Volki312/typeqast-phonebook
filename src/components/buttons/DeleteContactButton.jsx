import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

class DeleteContactButton extends React.Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  togglePopup = () => this.setState(prevState => ({showPopup: !prevState.showPopup}))
  deleteContact = () => this.props.deleteContact()
  
  static defaultProps = {
    className: "nav--button"
  }

  render () {
    return (
      <div>
        <button className={this.props.className} onClick={this.togglePopup}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {
          this.state.showPopup && 
          <div id="delete_confirmation">
            <div className="confirmation--inner">
              <p className="confirmation--title">Delete</p>
              <p className="confirmation--body">Are you sure you want to delete this contact?</p>
              <div className="confirmation--actions">
                <button onClick={this.togglePopup} className="confirmation--button confirmation--button-cancel">Cancel</button>
                <button onClick={this.deleteContact} className="confirmation--button confirmation--button-delete">Delete</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

DeleteContactButton.propTypes = {
  className: PropTypes.string,
  deleteContact: PropTypes.func.isRequired
}

export default DeleteContactButton