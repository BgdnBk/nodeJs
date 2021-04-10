const contact = require("./contacts");

const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contact.listContacts();
      break;

    case "get":
      contact.getContactById(id);
      break;

    case "add":
      contact.addContact(name, email, phone);
      break;

    case "remove":
      contact.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
