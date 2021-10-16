const Counter = (props) => {
  return (
    <>
      <h1>Count: {props.count}</h1>
      <button onClick={props.onIncrement}>+</button>
    </>
  );
};

export default Counter;
