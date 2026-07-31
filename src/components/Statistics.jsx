import { Component } from "react";
import Notification from "./Notification";

export default class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>
        {this.props.statistics.total ? (
            <ul>
                {Object.keys(this.props.statistics).map((stat, index) => (
                    <li key={index}>{stat}: {this.props.statistics[stat]}{stat === "positivePercentage" ? "%" : ""}</li>
                ))}
            </ul>
        ) : (<Notification message="There is no feedback"/>)}
      </>
    );
  }
}