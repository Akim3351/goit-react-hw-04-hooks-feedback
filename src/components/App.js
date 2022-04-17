import React, { useState } from 'react';
import Section from './Section/Section';
import FeedBackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [marks, setMarks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = marks;

  const onLeaveFeedback = event => {
    const { name } = event.target;
    setMarks({ ...marks, [name]: marks[name] + 1 });
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
        <FeedBackOptions
          options={Object.keys(marks)}
          onLeaveFeedback={onLeaveFeedback}
        />
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
