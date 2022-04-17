import React from 'react';
import { ButtonsWrapper, FeedbackButton } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(btn => (
        <FeedbackButton
          type="button"
          key={btn}
          name={btn}
          onClick={onLeaveFeedback}
        >
          {btn}
        </FeedbackButton>
      ))}
    </ButtonsWrapper>
  );
};

FeedBackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedBackOptions;
