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

    switch (targetName) {
      case 'good':
        setGood(pre => pre + 1);
        break;
      case 'neutral':
        setNeutral(pre => pre + 1);
        break;
      case 'bad':
        setBad(pre => pre + 1);

      // eslint-disable-next-line no-fallthrough
      default:
        return;
    }
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
