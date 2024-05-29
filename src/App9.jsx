/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValueLoadable } from "recoil";
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
  // eslint-disable-next-line no-unused-vars
  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading .....</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title} {"=>"} {todo.contents.description}
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Error has occured....</div>;
  }
}
export default App8;
