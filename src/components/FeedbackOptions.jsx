import { Component } from "react";

export default class FeedbackOptions extends Component {
  render() {
    return (
      <ul>
        {this.props.options.map((option, index) => (
            <li key={index}><button onClick={() => {this.props.onLeaveFeedback(option.toLowerCase())}}>{option}</button></li>
        ))}
      </ul>
    );
  }
}