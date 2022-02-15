import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  const [incompleteTodo, setIncomplateTodo] = useState(["aaa", "iii"]);
  const [completeTodo, setComplateTodo] = useState(["comp1", "comp2"]);
  const [todoText, setTodoText] = useState("ddd");

  const onClickAdd = (e) => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...incompleteTodo, todoText];
    setIncomplateTodo(newTodos);
    setTodoText("");
  };

  const onClickRemove = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setIncomplateTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodo];
    const newCompTodos = [...completeTodo, incompleteTodo[index]];

    newTodos.splice(index, 1);
    setIncomplateTodo(newTodos);

    setComplateTodo(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...completeTodo];
    const newTodos = [...incompleteTodo, completeTodo[index]];

    newCompTodos.splice(index, 1);
    setComplateTodo(newCompTodos);

    setIncomplateTodo(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        setTodoText={setTodoText}
        onClickAdd={onClickAdd}
      />
      <div className="uncomp-area">
        <p className="title">未完了</p>
        <ul id="uncomp-ul">
          {incompleteTodo.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickRemove(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="comp-area">
        <p className="title">完了</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  {todo}
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
