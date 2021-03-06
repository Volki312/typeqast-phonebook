import contactsDataService from './service';

/**
 * Some nasty stuff going on here
 * @param {*} dataService
 */
const ContactsStore = (dataService) => {
  let _contacts = []
  dataService.getAll().then(data => _contacts = data)

  /**
   * Creates unique contact ID based on provided array
   * @param {Array} array
   */
  const getUniqueId = array => {
    let len = array.length
    if (!array || !len) return 1
    
    const lastId = array.sort((curr, next) => curr.id - next.id)[len - 1].id
    return lastId + 1
  }

  /* Fetches all available data from local storage */
  const fetchData = () => dataService.getAll()

  /**
   * Gets single Contact object as Promise based on provided id.
   * @param {number} id
   */
  const get = id => dataService.getOne(id)

  /**
   * Creates new Contact object with unique id and provided data.
   * Saves new Contact to local storage.
   * @param {object} data
   */
  const create = data => {
    dataService.getAll().then(data => _contacts = data)
    const newContact = { id: getUniqueId(_contacts), isFavorite: false, ...data }
    return dataService.create(newContact)
  }

  /**
   * Updates existing Contact object.
   * Saves changes to local storage.
   * @param {object} updatedContact
   */
  const update = updatedContact =>
    dataService.update(updatedContact)

  /**
   * Removes targeted Contact object.
   * Also removes it from local storage.
   * @param {object} updatedContact
   */
  const remove = id =>
    dataService.remove(id)

  return Object.freeze({
    fetchData,
    get,
    create,
    update,
    remove
  })
}

let contactsStore = ContactsStore(contactsDataService())

export default contactsStore