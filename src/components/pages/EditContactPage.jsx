import React, { Component } from 'react'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import contactsStore from '../../fakeApi/store';

class EditContactPage extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false,
      form: {
        id: 0,
        name: "",
        email: "",
        numbers: [{number: "", label: ""}],
        image: "",
        isFavorite: false
      }
    }

    this.deleteContact = this.deleteContact.bind(this)
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
    
    console.log(this.state)

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

    this.props.editContact(this.state.form)
    this.props.history.push("/contacts/all")
  }

  deleteContact = (id) => {
    this.props.deleteContact(id)
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
    const form = this.state.form

    this.setState({form: { numbers: [...form.numbers, {number:"", label:""}]}})
  }

  removeNumber = (event) => {
    event.preventDefault()
    const form = this.state.form
    const i = parseInt(event.target.previousElementSibling.dataset.id)

    this.setState({form: { numbers: [...form.numbers.slice(0, i), ...form.numbers.slice(i + 1)]}})
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    contactsStore.get(id).then(data => 
      data ?
      this.setState({form: {...data}})
      :
      this.props.history.push("/contacts/ContactNotFound")
    )
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <CrudNavigation match={match} deleteContact={this.deleteContact} id={match.params.id} />
        <main>
          <ContactForm
            state={this.state}
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

export default EditContactPage