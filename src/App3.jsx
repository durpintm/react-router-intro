import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

const App3 = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Count() {
  console.log("Count re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

// eslint-disable-next-line react/prop-types
function Buttons() {
  // This re-renders the Buttons component
  // const [count, setCount] = useRecoilState(countAtom);

  // Updating the count using useSetRecoilState will not re-render the Button component
  const setCount = useSetRecoilState(countAtom);
  console.log("button re-renders");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement Count
      </button>
    </div>
  );
}
export default App3;
