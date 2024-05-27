import { useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Count({ count, setCount }) {
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Decrement Count
      </button>
    </div>
  );
}
export default App2;
