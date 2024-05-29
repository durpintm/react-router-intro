/* eslint-disable react/prop-types */
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./store/atoms/atomsFamily";

function App7() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // eslint-disable-next-line no-unused-vars
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title} {"=>"} {todo.description}
      <br />
    </>
  );
}

export default App7;
