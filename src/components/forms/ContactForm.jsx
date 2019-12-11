import React from 'react'
import { Link } from 'react-router-dom'
import NumberInputs from '../inputs/NumberInputs'
import ImageUrlPopupInput from '../inputs/ImageUrlPopupInput'

const ContactForm = (props) => {

  const handleInputChange = (event) => props.handleInputChange(event)
  const onSubmit = (event) => props.onSubmit(event)
  const togglePopup = (event) => props.togglePopup(event)
  const addNumber = (event) => props.addNumber(event)
  const removeNumber = (event) => props.removeNumber(event)

  const {showPopup, image, name, email, numbers} = props.form

  //TODO: form validation rules

  return (
    <form>
      <div className="form--row">
        <ImageUrlPopupInput showPopup={showPopup} value={image} handleInputChange={handleInputChange} togglePopup={togglePopup} />
      </div>

      <div className="form--row">
        <label>full name
          <input
            name="name"
            placeholder="Full name"
            type="text"
            value={name}
            onChange={handleInputChange}
            maxLength="28"
            autoFocus
            required
          />
        </label>
      </div>

      <div className="form--row">
        <label>email
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputChange}
            maxLength="40"
          />
        </label>
      </div>

      <div className="form--row">
        <NumberInputs numbers={numbers} removeNumber={removeNumber} addNumber={addNumber} handleInputChange={handleInputChange} />
      </div>

      <div className="form--row form--row-footer">
        <button><Link to="/contacts/all">Cancel</Link></button>
        <button onClick={onSubmit}>Save</button>
      </div>
    </form>
  )
}

export default ContactForm