import css from './Feedback.module.css';
import React, { Component } from 'react';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isDisplayed: false,
  };
  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
    this.setState({ isDisplayed: true });
    console.log(this.state);
  };
  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
    this.setState({ isDisplayed: true });
    console.log(this.state);
  };
  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
    this.setState({ isDisplayed: true });
    console.log(this.state);
  };

  render() {
    const { good, neutral, bad, isDisplayed } = this.state;
    return (
      <div className={css.feedback}>
        <h1 className={css.title}> Please leave feedback </h1>
        <div className={css.buttons}>
          <button onClick={this.handleGood}>Good </button>
          <button onClick={this.handleNeutral}>Neutral</button>
          <button onClick={this.handleBad}>Bad</button>
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
