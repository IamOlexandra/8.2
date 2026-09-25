export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <ul>
      {options.map((option, index) => (
          <li key={index}><button onClick={() => {onLeaveFeedback(option.toLowerCase())}}>{option}</button></li>
      ))}
    </ul>
  );
}