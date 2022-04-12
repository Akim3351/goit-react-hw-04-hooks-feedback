import React, { useState } from 'react';
import Section from './Section/Section';
import FeedBackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, incrementGood] = useState(0);
  const [neutral, incrementNeutral] = useState(0);
  const [bad, incrementBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    const { name } = event.target;
    if (name === 'good') {
      incrementGood(good + 1);
    } else if (name === 'neutral') {
      incrementNeutral(neutral + 1);
    } else if (name === 'bad') {
      incrementBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Number.parseInt(
      (good / (good + neutral + bad)) * 100
    );
    return Number.isNaN(positiveFeedback) ? '0' : `${positiveFeedback} %`;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedBackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            countTotalFeedback={countTotalFeedback()}
          />
        )}
      </Section>
    </div>
  );
};
