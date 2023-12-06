import React, { Component } from 'react';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notiflix from 'notiflix';

class Contacts extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    this.setState({ contacts: JSON.parse(localStorageContacts) });
    const formData = localStorage.getItem('formData');
    this.setState({ name: JSON.parse(formData)[0].name });
    this.setState({ number: JSON.parse(formData)[0].number });
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubbmit = evt => {
    const { name, number, contacts } = this.state;
    evt.preventDefault();
    const nanoId = nanoid();
    const newContact = {
      id: nanoId,
      name: name,
      number: number,
    };
    // console.log(JSON.parse(localStorage.getItem('contacts')));
    const stateNames = contacts.map(contact => contact.name);
    const stateNumbers = contacts.map(contact => contact.number);
    const findNameByNumb = contacts.find(contact =>
      contact.number.includes(newContact.number)
    );

    if (stateNames.includes(newContact.name)) {
      return Notiflix.Report.warning(
        `warning`,
        `${newContact.name} is alreadyin contacts.`,
        'return'
      );
    }
    if (stateNumbers.includes(newContact.number)) {
      return Notiflix.Report.warning(
        `warning`,
        `${newContact.number} is alreadyin asign to ${findNameByNumb.name} contact.`,
        'return'
      );
    }
    if (this.state.name === '') {
      return Notiflix.Report.warning(`no name`, `warning`, 'return');
    }
    if (this.state.number === '') {
      return Notiflix.Report.warning(`warning`, `no number`, 'return');
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    localStorage.setItem(
      'formData',
      JSON.stringify([{ name: '', number: '' }])
    );
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });

    localStorage.setItem(
      'formData',
      JSON.stringify([{ name: this.state.name, number: this.state.number }])
    );
  };

  FilteredData = () => {
    const normalizeData = this.state.filter.toLowerCase();
    const nameFiltered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeData)
    );
    const numberFiltered = this.state.contacts.filter(contact =>
      contact.number.includes(normalizeData)
    );

    if (nameFiltered.length !== 0) {
      return nameFiltered;
    }
    if (numberFiltered) {
      return numberFiltered;
    }
  };

  HandleDeleteContact = evt => {
    // console.log(evt.target.id);
    const { contacts } = this.state;
    const findContact = contacts.find(contact => contact.id === evt.target.id);
    const indexContscts = contacts.indexOf(findContact);
    this.setState(contacts.splice(indexContscts, 1));
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleFilterItems = this.FilteredData();

    return (
      <div className={css.contacts}>
        <ContactForm
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubbmit={this.handleSubbmit}
        />
        <h1>Contacts</h1>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ul>
          <ContactList
            contacts={visibleFilterItems}
            filter={filter}
            HandleDeleteContact={this.HandleDeleteContact}
          />
        </ul>
      </div>
    );
  }
}

export default Contacts;
