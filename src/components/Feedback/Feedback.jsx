import { useState } from 'react';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../SectionChildren/SectionChildren';
import Notification from '../Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    const targetName = e.target.dataset.name.toLowerCase();

    if (targetName === 'good') setGood(pre => pre + 1);
    if (targetName === 'neutral') setNeutral(pre => pre + 1);
    if (targetName === 'bad') setBad(pre => pre + 1);
  };

  function countTotalFeedback() {
    let total = good + neutral + bad;
    return total;
  }
  function countPositiveFeedbackPercentage() {
    const total = good + neutral + bad;
    const persentFromTotal = Math.round((good * 100) / total);
    return persentFromTotal;
  }

  countTotalFeedback();
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification messege="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
