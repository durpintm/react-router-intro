import { useContext, useState } from "react";
import { CountContext } from "./context";

const App2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

// eslint-disable-next-line react/prop-types
function Buttons() {
  const { count, setCount } = useContext(CountContext);

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
          setCount(count - 1);
        }}
      >
        Decrement Count
      </button>
    </div>
  );
}
export default App2;
