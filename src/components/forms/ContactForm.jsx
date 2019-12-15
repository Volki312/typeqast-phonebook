import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import NumberInputs from '../inputs/NumberInputs'
import ImageUrlPopupInput from '../inputs/ImageUrlPopupInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.contact.name,
      email: props.contact.email,
      numbers: props.contact.numbers,
      image: props.contact.image,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.removeNumber = this.removeNumber.bind(this)
  }

  static defaultProps  = {
    contact: {
      name: "",
      email: "",
      numbers: [{number: "", label: ""}],
      image: "https://i.ibb.co/80WvdvX/placeholder.png"
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const className = target.classList[0]
    const i = target.dataset.id

    if (["number", "label"].includes(className)) {
      const numbers = [...this.state.numbers]   
      numbers[i][className] = value
      this.setState({numbers: numbers})
    } 
    else this.setState({[name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, numbers } = this.state

    if (name.length < 4) alert("\t\t\t\t⊂(▀¯▀⊂)\n\t\t\t\tHold up!\nName must contain more than 3 characters!")
    else if (name.length > 40) alert("\tლ( ◕ 益 ◕ ) ლ\nY so meny characters")
    //TODO: email, image url, number regex test
    else if (numbers.length === 0 || !numbers[0].number || numbers[0].number.length === 0) alert("\t\t\t(⌐■_■)–︻╦╤─\nEnter at least one contact number or I shot!")
    else this.props.handleSubmit({...this.state})
  }
  
  addNumber = event => {
    event.preventDefault()
    this.setState(prevState => ({numbers: [...prevState.numbers, {number:"", label:""}]}))
  }

  removeNumber = event => {
    event.preventDefault()
    const i = parseInt(event.target.previousElementSibling.dataset.id)
    this.setState(prevState => ({numbers: prevState.numbers.filter((num, ind) => ind !== i)}))
  }

  render() {
    const { name, email, numbers, image } = this.state

    return (
      <form id="form">
        <div className="form--row">
          <ImageUrlPopupInput value={image} handleInputChange={this.handleInputChange} />
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
              className="form--input"
            />
          </label>
        </div>

        <div className="form--row form--row-last">
          <NumberInputs 
            numbers={numbers} 
            removeNumber={this.removeNumber} 
            addNumber={this.addNumber} 
            handleInputChange={this.handleInputChange} 
          />
        </div>

        <div className="form--footer">
          <Link to="/contacts/all">
            <button className="form--button form--button-cancel">Cancel</button>
          </Link>
          <button onClick={this.handleSubmit} className="form--button form--button-save">Save</button>
        </div>
      </form>
    )
  }
}

ContactForm.propTypes = {
  contact: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))])).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default ContactForm