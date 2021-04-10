const fs = require("fs");
const path = require("path");
const { parsed } = require("yargs");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    try {
      const parserData = JSON.parse(data.toString());
      console.table(parserData);
    } catch (error) {
      console.log("Ошибка", err);
    }
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    try {
      const parserData = JSON.parse(data.toString());
      const findContact = parserData.find((item) => item.id === contactId);
      console.log("Контакт", findContact);
    } catch (error) {
      console.log("Ошибка", err);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    try {
      const parserData = JSON.parse(data.toString());
      const deleteContact = parserData.filter((item) => item.id !== contactId);
      console.table(deleteContact);
      fs.writeFile(contactsPath, JSON.stringify(deleteContact), () => {
        console.log("Контакт удалён");
      });
      return deleteContact;
    } catch (error) {
      console.log("Ошибка", err);
    }
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, (err, data) => {
    try {
      const parserData = JSON.parse(data.toString());
      const addingContact = { name, email, phone };

      parserData.push(addingContact);
      console.table(parserData);
      fs.writeFile(contactsPath, JSON.stringify(parserData), () => {
        console.log("Контакт добавлен");
      });
    } catch (error) {
      console.log("Ошибка", err);
    }
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
