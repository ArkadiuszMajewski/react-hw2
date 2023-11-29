import React, { Component } from 'react';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

class Contacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubbmit = evt => {
    evt.preventDefault();
    const nanoId = nanoid();
    const newContactt = {
      id: nanoId,
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContactt],
    }));

    console.log(this.state.contacts);
  };

  handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    console.log(contacts.map(contact => contact.name));
    // console.log(Object.entries(contacts));
    const contactmap = contacts.map(contact => contact.name);
    return (
      <div className={css.contacts}>
        <form onSubmit={this.handleSubbmit} className={css.form}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
            message="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={this.handleChange}
          />
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
          message="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={filter}
          onChange={this.handleChange}
        />
        <ul>
          {contacts.map(contact => (
            <li>
              {contact.name} - {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
