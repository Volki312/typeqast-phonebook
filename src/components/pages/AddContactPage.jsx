import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CrudNavigation from '../navigations/CrudNavigation'
import NumberInputs from '../inputs/NumberInputs'
import ImageUrlPopupInput from '../inputs/ImageUrlPopupInput'

class AddContactPage extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false,
      image: "",
      name: "",
      email: "",
      numbers: [{number: "", label: ""}]
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.removeNumber = this.removeNumber.bind(this)
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    const className = target.className
    const i = target.dataset.id

    if (["number", "label"].includes(className)) {
      const numbers = [...this.state.numbers]   
      numbers[i][className] = value
      this.setState({ numbers })
    } 
    else this.setState({ [name]: value })

    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("form submited")
    this.props.history.push("/contacts/all")
  }

  togglePopup = (event) => {
    event.preventDefault()
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  addNumber = (event) => {
    event.preventDefault()
    this.setState(prevState => ({numbers: [...prevState.numbers, {number:"", label:""}]}))
  }

  removeNumber = (event) => {
    event.preventDefault()
    const numbers = this.state.numbers
    const i = parseInt(event.target.previousElementSibling.dataset.id)

    const updatedNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)]

    this.setState({numbers: updatedNumbers})
  }

  render() {
    const {showPopup, image, name, email, numbers} = this.state
    return (
      <div>
        <CrudNavigation match={this.props.match}/>
        <main>
          <form>

            <div className="form--row">
              <ImageUrlPopupInput showPopup={showPopup} value={image} handleInputChange={this.handleInputChange} togglePopup={this.togglePopup} />
            </div>

            <div className="form--row">
              <label>full name
                <input
                  name="name"
                  placeholder="Full name"
                  type="text"
                  value={name}
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                />
              </label>
            </div>

            <div className="form--row">
              <NumberInputs numbers={numbers} removeNumber={this.removeNumber} addNumber={this.addNumber} handleInputChange={this.handleInputChange} />
            </div>

            <div className="form--row-footer">
              <button><Link to="/contacts/all">Cancel</Link></button>
              <button onClick={this.handleSubmit}>Save</button>
            </div>
            
          </form>
        </main>
      </div>
    )
  }
}

export default AddContactPage