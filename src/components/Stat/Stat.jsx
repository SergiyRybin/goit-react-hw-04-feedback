import PropTypes from "prop-types";
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => 
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>{total > 0 && `Total: ${total}`}</li>
    <li>
      {total > 0 && `Positive feedback: ${positivePercentage}%`}
    </li>
  </ul>;
;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
  
}

export default Statistics;

