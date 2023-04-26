import React, { Component } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prev => ({ [feedbackType]: prev[feedbackType] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Container>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Container>
        <Container>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <h2>Statistic</h2>
          <ul>
            <li>
              <p>Good: </p>
            </li>
            <li>
              <p>Neutral: </p>
            </li>
            <li>
              <p>Bad: </p>
            </li>
          </ul>
        </Container>
      </>
    );
  }
}

export default App;
