import React, { Component } from 'react'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'

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
    this.onSubmit = this.onSubmit.bind(this)
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
      const numbers = [...this.state.form.numbers]   
      numbers[i][className] = value
      this.setState( {form: { ...this.state.form, numbers: numbers }})
    } 
    else this.setState( {form:{ ...this.state.form, [name]: value }})
  }

  onSubmit = (event) => {
    event.preventDefault()

    event.target.form.checkValidity()
    event.target.form.reportValidity()

    this.props.addContact({...this.state.form })
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
    const { match } = this.props
    return (
      <div>
        <CrudNavigation match={match} deleteContact={this.deleteContact} id={match.params.id} />
        <main>
          <ContactForm
            form={this.state.form}
            handleInputChange={this.handleInputChange}
            onSubmit={this.onSubmit}
            togglePopup={this.togglePopup}
            addNumber={this.addNumber}
            removeNumber={this.removeNumber}
          />
        </main>
      </div>
    )
  }
}

export default AddContactPage