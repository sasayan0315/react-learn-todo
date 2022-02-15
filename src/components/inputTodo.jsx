import React, { useState } from "react";
import "../styles.css";

export const InputTodo = (props) => {
  const [todoText, setTodoText] = useState(props.todoText);

  const onChangeInput = (e) => {
    setTodoText(e.target.value);
    props.setTodoText(e.target.value);
  };

  return (
    <div className="input-area">
      <input
        id="inputtext"
        type="text"
        placeholder="Input todo"
        value={todoText}
        onChange={onChangeInput}
      />
      <button id="addbutton" onClick={props.onClickAdd}>
        追加
      </button>
    </div>
  );
};
