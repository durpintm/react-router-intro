import { useEffect, useState } from "react";

function useInterval(cb, timeout) {
  useEffect(() => {
    const interval = setInterval(cb, timeout);
    return () => clearInterval(interval);
  }, [cb, timeout]);
}

const App11 = () => {
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    setTimer((t) => t + 1);
  }, 1000);

  return <div>Timer is at {timer}</div>;
};

export default App11;
