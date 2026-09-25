import { Component, useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  function onLeaveFeedback(feedback) {
    switch(feedback) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  }
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round(good / countTotalFeedback() * 100);
  }
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={["Good", "Neutral", "Bad"]}  onLeaveFeedback={feedback => onLeaveFeedback(feedback)}/>
      <Statistics statistics={{good: good, neutral: neutral, bad: bad, total: countTotalFeedback(), positivePercentage: countPositiveFeedbackPercentage()}}/>
    </Section>
  );
}

export default App;
