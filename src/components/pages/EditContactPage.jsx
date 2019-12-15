import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import LoadingSpinner from '../shared/LoadingSpinner'
import contactsStore from '../../fakeApi/store';

class EditContactPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.removeNumber = this.removeNumber.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const classList = target.classList[0]
    const i = target.dataset.id
    const { form } = this.state

    if (["number", "label"].includes(classList)) {
      const numbers = [...form.numbers]   
      numbers[i][classList] = value
      this.setState( {form: { ...form, numbers: numbers }})
    } 
    else this.setState( {form:{ ...form, [name]: value }})
  }

  onSubmit = event => {
    event.preventDefault()

    event.target.form.checkValidity()
    event.target.form.reportValidity()

    contactsStore.update(this.state.form).then(
      data => this.props.history.push("/contacts/all")
    )
  }

  deleteContact = id => {
    contactsStore.remove(id).then(
      data => this.props.history.push("/contacts/all")
    )
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

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    contactsStore.get(id).then(data => 
      data ?
      this.setState({
        form: {...data}, 
        isLoading: false
      }) :
      this.props.history.push("/contacts/ContactNotFound")
    )
  }

  render() {
    const { match } = this.props
    const { isLoading } = this.state
    
    return (
      <div>
        <CrudNavigation match={match} deleteContact={this.deleteContact} id={parseInt(match.params.id)} />
        <main>
          {
          isLoading ?
          <LoadingSpinner /> :
          <ContactForm
            state={this.state}
            handleInputChange={this.handleInputChange}
            onSubmit={this.onSubmit}
            togglePopup={this.togglePopup}
            addNumber={this.addNumber}
            removeNumber={this.removeNumber}
          />
          }
        </main>
      </div>
    )
  }
}

EditContactPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default EditContactPage