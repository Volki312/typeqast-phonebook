import mockContacts from './db'
import LocalStorage from './localStorage'

// Thumbs up for @frezo00

const Service = () => {
  let _contacts = []
  const _localStorage = LocalStorage()

  /**
   * Saves Contacts into local storage and returns Promise.
   * @param {Array} contacts
   */
  const fakeHttp = contacts => {
    return new Promise(resolve => {
      setTimeout(() => {
        _localStorage.save(contacts)
        resolve(contacts)
      }, 150)
    })
  }

  /** Gets Contacts array as Promise. */
  const getAll = () => {
    // Get data from local storage and save in array.
    _contacts = _localStorage.get()

    // Save mocks if no data in local storage or if all contacts are deleted
    if (!_contacts || !_contacts.length) _contacts = mockContacts
    return fakeHttp(_contacts)
  }

  /**
   * Returns single Contact as Promise by provided id.
   * @param {number} id
   */
  const getOne = id => {
    _contacts = _localStorage.get()
    const contact = _contacts.find(c => c.id === id)
    return new Promise(resolve => {
      setTimeout(() => resolve(contact), 100)
    })
  }

  /**
   * Saves provided Contact and returns all Contacts as Promise.
   * @param {Object} contact
   */
  const create = contact => {
    _contacts.push(contact)
    return fakeHttp([..._contacts])
  }

  /**
   * Updates provided Contact in array and returns that array as Promise.
   * @param {Object} updatedContact
   */
  const update = updatedContact => {
    _contacts[_contacts.findIndex(c => c.id === updatedContact.id)] = updatedContact
    return fakeHttp([..._contacts])
  }

  /**
   * Deletes provided Contact from array and returns that array as Promise.
   * @param {Object} removedContact
   */
  const remove = id => {
    _contacts = _contacts.filter(c => c.id !== id)
    return fakeHttp([..._contacts])
  }

  return Object.freeze({
    getAll,
    getOne,
    create,
    update,
    remove
  })
}

export default Service