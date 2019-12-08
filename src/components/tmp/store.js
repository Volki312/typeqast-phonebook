/**
 * Some nasty stuff going on here
 * @param {*} dataService
 *
 * NOTE:
 *
 * Private array '_contacts' is just a copy of the same named
 * array in service. The reason for that is specific behavior of
 * Local Storage (explained in service.js).
 *
 * Usually, this kind of array '_contacts' will be updated after
 * each http request and will be served as current app state,
 * but due to mentioned reason, that's not the case here.
 */
const ContactsStore = (dataService) => {
  let _contacts = []

  /**
   * Creates unique contact ID based on provided array
   * @param {Array} array
   */
  const getUniqueId = array => {
    let len = array.length
    if (!!array && len > 0) {
      const lastId = array.sort((curr, next) => curr.id - next.id)[len - 1].id
      return lastId + 1
    }
    return 1
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
    const newContact = { ...data, id: getUniqueId(_contacts) }
    return dataService
      .create(newContact)
  }

  /**
   * Updates existing Contact object.
   * Saves changes to local storage.
   * @param {object} updatedContact
   */
  const update = updatedContact =>
    dataService
      .update(updatedContact)

  /**
   * Removes targeted Contact object.
   * Also removes it from local storage.
   * @param {object} updatedContact
   */
  const remove = removedContact =>
    dataService
      .remove(removedContact)

  return Object.freeze({
    fetchData,
    get,
    create,
    update,
    remove
  })
}

export default ContactsStore