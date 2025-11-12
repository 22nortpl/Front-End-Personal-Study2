function CounterButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default CounterButton;
