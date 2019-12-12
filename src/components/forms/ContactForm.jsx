import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import NumberInputs from '../inputs/NumberInputs'
import ImageUrlPopupInput from '../inputs/ImageUrlPopupInput'
const ContactForm = (props) => {

  const handleInputChange = (event) => props.handleInputChange(event)
  const onSubmit = (event) => props.onSubmit(event)
  const togglePopup = (event) => props.togglePopup(event)
  const addNumber = (event) => props.addNumber(event)
  const removeNumber = (event) => props.removeNumber(event)

  const { showPopup, form } = props.state
  const { image, name, email, numbers } = form

  //TODO: form validation rules

  return (
    <form id="form">
      <div className="form--row">
        <ImageUrlPopupInput showPopup={showPopup} value={image} handleInputChange={handleInputChange} togglePopup={togglePopup} />
      </div>

      <div className="form--row">
        <label className="form--label"><FontAwesomeIcon icon={faUser} className="label--fa" />full name<br/>
          <input
            name="name"
            placeholder="Full name"
            type="text"
            value={name}
            onChange={handleInputChange}
            maxLength="28"
            className="form--input"
            autoFocus
            required
          />
        </label>
      </div>

      <div className="form--row">
        <label className="form--label"><FontAwesomeIcon icon={faEnvelope} className="label--fa" />email<br/>
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputChange}
            maxLength="40"
            className="form--input"
          />
        </label>
      </div>

      <div className="form--row form--row-last">
        <NumberInputs numbers={numbers} removeNumber={removeNumber} addNumber={addNumber} handleInputChange={handleInputChange} />
      </div>

      <div className="form--footer">
        <button className="form--button form--button-cancel"><Link to="/contacts/all">Cancel</Link></button>
        <button onClick={onSubmit} className="form--button form--button-save">Save</button>
      </div>
    </form>
  )
}

export default ContactForm