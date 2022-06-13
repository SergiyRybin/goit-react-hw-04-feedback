import PropTypes from 'prop-types';
import React from 'react';
import Button from '../ButtonFedback/ButtonFedback';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <Button onLeaveFeedback={onLeaveFeedback} name="Good" />
    <Button onLeaveFeedback={onLeaveFeedback} name="Neutral" />
    <Button onLeaveFeedback={onLeaveFeedback} name="Bad" />
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
