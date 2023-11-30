import React, { Component } from 'react';
import css from './ContactList.module.css';

import PropTypes from 'prop-types';

class ContactForm extends Component {
  render() {
    const { name, number, handleChange, handleSubbmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubbmit} className={css.form}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
            message="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={handleChange}
          />
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubbmit: PropTypes.func,
};
