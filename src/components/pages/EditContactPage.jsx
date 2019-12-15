import React from 'react'
import PropTypes from 'prop-types'
import CrudNavigation from '../navigations/CrudNavigation'
import ContactForm from '../forms/ContactForm'
import LoadingSpinner from '../shared/LoadingSpinner'
import contactsStore from '../../fakeApi/store';

class EditContactPage extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this)
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
            handleSubmit={this.handleSubmit}
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