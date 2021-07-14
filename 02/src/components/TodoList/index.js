import { useState } from "react";
import { Button } from "../Button";
import "./styles.scss";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    const newList = [...list, newItem];

    setList(newList);
    setNewItem("");
  };

  const changeNewItem = (event) => {
    setNewItem(event.target.value);
  };

  const removeItem = (position) => {
    const newList = list.filter((_, index) => index !== position);

    setList(newList);
  };

  return (
    <div id="todo-list">
      <h2>To-do List</h2>
      <input
        value={newItem}
        onChange={changeNewItem}
        placeholder="Digite um novo item da lista"
      />
      <Button onClick={addItem}>Adicionar item</Button>
      <h3>Lista</h3>
      <ul>
        {list.map((item, index) => (
          <li onDoubleClick={() => removeItem(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
