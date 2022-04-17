import React from 'react';
import propTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {countTotalFeedback}</StatsItem>
      <StatsItem>
        Positive feedback: {countPositiveFeedbackPercentage()}
      </StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.number,
  countPositiveFeedbackPercentage: propTypes.func.isRequired,
};

export default Statistics;
