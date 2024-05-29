/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./store/atoms/selectorFamily";

function App8() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title} {"=>"} {todo.description}
      <br />
    </>
  );
}

export default App8;
