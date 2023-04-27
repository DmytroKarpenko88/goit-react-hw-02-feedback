import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
