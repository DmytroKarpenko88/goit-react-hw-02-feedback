import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Head, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Item>
        <Head>Good:</Head>
        <Value>{good}</Value>
      </Item>
      <Item>
        <Head>Neutral:</Head>
        <Value>{neutral}</Value>
      </Item>
      <Item>
        <Head>Bad:</Head>
        <Value>{bad}</Value>
      </Item>
      <Item>
        <Head>Total:</Head>
        <Value>{total}</Value>
      </Item>
      <Item>
        <Head>Positive feedback:</Head>
        <Value>{positivePercentage}%</Value>
      </Item>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
