import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onClickBtn = feedbackType => () => {
    onLeaveFeedback(feedbackType);
  };

  return (
    <Container>
      {options.map(feedbackType => {
        return (
          <Item key={feedbackType}>
            <Btn onClick={onClickBtn(feedbackType)}>{feedbackType}</Btn>
          </Item>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
