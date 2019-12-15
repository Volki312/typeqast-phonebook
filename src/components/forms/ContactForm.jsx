import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import NumberInputs from '../inputs/NumberInputs'
import ImageUrlPopupInput from '../inputs/ImageUrlPopupInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactForm = props => {
  const handleInputChange = event => props.handleInputChange(event)
  const handleSubmit = event => props.handleSubmit(event)
  const togglePopup = event => props.togglePopup(event)
  const addNumber = event => props.addNumber(event)
  const removeNumber = event => props.removeNumber(event)

  const { showPopup, form } = props.state
  const { image, name, email, numbers } = form

  return (
    <form id="form">
      <div className="form--row">
        <ImageUrlPopupInput 
          showPopup={showPopup} 
          value={image} 
          handleInputChange={handleInputChange} 
          togglePopup={togglePopup} 
        />
      </div>

      <div className="form--row">
        <label className="form--label">
          <FontAwesomeIcon icon={faUser} className="label--fa" />
          <p>full name</p><br/>
          <input
            name="name"
            placeholder="Full name"
            type="text"
            value={name}
            onChange={handleInputChange}
            className="form--input"
            autoFocus
          />
        </label>
      </div>

      <div className="form--row">
        <label className="form--label">
          <FontAwesomeIcon icon={faEnvelope} className="label--fa" />
          <p>email</p><br/>
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputChange}
            className="form--input"
          />
        </label>
      </div>

      <div className="form--row form--row-last">
        <NumberInputs 
          numbers={numbers} 
          removeNumber={removeNumber} 
          addNumber={addNumber} 
          handleInputChange={handleInputChange} 
        />
      </div>

      <div className="form--footer">
        <button className="form--button form--button-cancel">
          <Link to="/contacts/all">Cancel</Link>
        </button>
        <button onClick={handleSubmit} className="form--button form--button-save">Save</button>
      </div>
    </form>
  )
}

ContactForm.propTypes = {
  state: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.bool])).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  addNumber: PropTypes.func.isRequired,
  removeNumber: PropTypes.func.isRequired
}

export default ContactForm