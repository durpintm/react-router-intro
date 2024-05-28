import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
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
  const [count, setCount] = useRecoilState(countAtom);

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
export default App3;
