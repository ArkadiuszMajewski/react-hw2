import { number } from 'prop-types';
import css from './Feedback.module.css';
import React, { Component } from 'react';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isDisplayed: false,
  };

  handleButton = evt => {
    const name = evt.target.name;
    const value = parseInt(evt.target.value);

    this.setState({ [name]: value + 1, isDisplayed: true });
  };

  render() {
    const { good, neutral, bad, isDisplayed } = this.state;
    return (
      <div className={css.feedback}>
        <h1 className={css.title}> Please leave feedback </h1>
        <div className={css.buttons}>
          <button name="good" value={good} onClick={this.handleButton}>
            Good{' '}
          </button>
          <button name="neutral" value={neutral} onClick={this.handleButton}>
            Neutral
          </button>
          <button name="bad" value={bad} onClick={this.handleButton}>
            Bad
          </button>
        </div>
        <h1>Statistics:</h1>
        {isDisplayed ? (
          <div>
            <div>No feedback given</div>
            <ul className={css.list}>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {good + neutral + bad}</li>
              <li>
                Positive feedback:{' '}
                {((good / (good + neutral + bad)) * 100).toFixed(0)}%
              </li>
            </ul>
          </div>
        ) : (
          <div>No feedback given</div>
        )}
      </div>
    );
  }
}
export default Feedback;
