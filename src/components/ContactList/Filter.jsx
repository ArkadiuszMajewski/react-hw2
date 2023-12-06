import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        message="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={filter}
        onChange={handleChange}
      />
    );
  }
}
export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.string,
};
