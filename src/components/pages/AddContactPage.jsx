import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import contactsStore from '../../fakeApi/store';

class AddContactPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      form: {
        name: "",
        email: "",
        numbers: [{number: "", label: ""}],
        image: ""
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.removeNumber = this.removeNumber.bind(this)
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const classList = target.classList[0]
    const i = target.dataset.id

    if (["number", "label"].includes(classList)) {
      const numbers = [...this.state.form.numbers]   
      numbers[i][classList] = value
      this.setState( {form: { ...this.state.form, numbers: numbers }})
    } 
    else this.setState( {form:{ ...this.state.form, [name]: value }})
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, numbers } = this.state.form

    if (name.length < 4) alert("\t\t\t\t⊂(▀¯▀⊂)\n\t\t\t\tHold up!\nName must contain more than 3 characters!")
    else if (name.length > 40) alert("\tლ( ◕ 益 ◕ ) ლ\nY so meny characters")
    //TODO: email, image url, number regex test
    else if (numbers.length === 0 || !numbers[0].number || numbers[0].number.length === 0) alert("\t\t\t(⌐■_■)–︻╦╤─\nEnter at least one contact number or I shot!")
    else {
      contactsStore.update(this.state.form).then(
        data => this.props.history.push("/contacts/all")
      )
    }
  }

  togglePopup = event => {
    event.preventDefault()
    this.setState(prevState => ({showPopup: !prevState.showPopup}))
  }

  addNumber = event => {
    event.preventDefault()
    this.setState(prevState => ({form : {...prevState.form, numbers: [...prevState.form.numbers, {number:"", label:""}] }}))
  }

  removeNumber = event => {
    event.preventDefault()
    const i = parseInt(event.target.previousElementSibling.dataset.id)
    this.setState(prevState => ({form : {...prevState.form, numbers: prevState.form.numbers.filter((num, ind) => ind !== i)}}))
  }

  render() {
    return (
      <div>
        <CrudNavigation match={this.props.match} />
        <main>
          <ContactForm
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            togglePopup={this.togglePopup}
            addNumber={this.addNumber}
            removeNumber={this.removeNumber}
          />
        </main>
      </div>
    )
  }
}

AddContactPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default AddContactPage