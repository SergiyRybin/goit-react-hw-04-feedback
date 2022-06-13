import { Component } from 'react';

import Statistics from '../Stat/Stat';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../SectionChildren/SectionChildren';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const targetName = e.target.dataset.name.toLowerCase();
    this.setState(pre => {
      return {
        [targetName]: pre[targetName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }
  
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const persentFromTotal = Math.round((good * 100) / total);
    return persentFromTotal;
  }

  render() {
    const total = this.countTotalFeedback();
    const totalPersent = this.countPositiveFeedbackPercentage();

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification messege="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={totalPersent}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
