import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const clear = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return () => {
      clearTimeout(clear);
    };
  }, [value, timeout]);

  return debounceValue;
}
const App12 = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  return (
    <div>
      Debounce value is {debounceValue}
      <br />
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default App12;
