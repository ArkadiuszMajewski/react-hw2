import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, HandleDeleteContact } = this.props;

    return (
      <div>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button
              onClick={HandleDeleteContact}
              id={contact.id}
              className={css.buttonDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default ContactList;

ContactList.propType = {
  contacts: PropTypes.array,
};
