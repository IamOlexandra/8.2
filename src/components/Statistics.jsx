import Notification from "./Notification";

export default function Statistics({statistics}) {
  return (
    <>
      <h2>Statistics</h2>
      {statistics.total ? (
          <ul>
              {Object.keys(statistics).map((stat, index) => (
                  <li key={index}>{stat}: {statistics[stat]}{stat === "positivePercentage" ? "%" : ""}</li>
              ))}
          </ul>
      ) : (<Notification message="There is no feedback"/>)}
    </>
  );
}