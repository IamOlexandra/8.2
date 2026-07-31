import { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback(feedback) {
    const prevState = this.state;
    switch(feedback) {
      case "good":
        this.setState({good: prevState.good + 1});
        break;
      case "neutral":
        this.setState({neutral: prevState.neutral + 1});
        break;
      case "bad":
        this.setState({bad: prevState.bad + 1});
        break;
    }
  }
  countTotalFeedback() {
    const prevState = this.state;
    return prevState.good + prevState.neutral + prevState.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  }
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={["Good", "Neutral", "Bad"]}  onLeaveFeedback={feedback => this.onLeaveFeedback(feedback)}/>
        <Statistics statistics={{...this.state, total: this.countTotalFeedback(), positivePercentage: this.countPositiveFeedbackPercentage()}}/>
      </Section>
    );
  }
}

export default App;
