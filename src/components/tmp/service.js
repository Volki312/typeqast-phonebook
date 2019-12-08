import mockContacts from './db'
import LocalStorage from './localStorage'

// Credits to @frezo00
// https://github.com/frezo00/juniorJS-typeqast

/**
 * Service simulation with fake http calls.
 *
 * NOTE:
 *
 * Due to specific nature of Local Storage, for every request we need
 * to provide new array which will be saved in the local storage.
 * Based on that, local '_contacts' array is required for CRUD operations
 * on that array.
 *
 * This is mentioned since that kind of array isn't usually necessary
 * in service-like functions, as long as we can retrieve that kind of
 * data directly from app store/storage.
 */
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
        _localStorage.save(contacts);
        resolve(contacts);
      }, 100)
    })
  }

  /** Gets Contacts array as Promise. */
  const getAll = () => {
    // Get data from local storage and save in array.
    _contacts = _localStorage.get()

    // Save mocks if no data in local storage
    if (!_contacts) _contacts = mockContacts
    return fakeHttp(_contacts)
  }

  /**
   * Returns single Contact as Promise by provided id.
   * @param {number} id
   */
  const getOne = id => {
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
  const remove = removedContact => {
    _contacts = _contacts.filter(c => c.id !== removedContact.id)
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