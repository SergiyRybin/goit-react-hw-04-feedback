import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onLeaveFeedback, name }) => (
  <button type="button" data-name={name} onClick={onLeaveFeedback}>
    {name}
  </button>
);

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
