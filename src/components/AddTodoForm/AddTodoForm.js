import React, { useContext, useState } from "react";
import styles from "./AddTodoForm.module.css";
import { Button } from "./../Button/Button"; // Asegúrate de importar correctamente el componente Button
import { TodoContext } from "../../TodoContext/TodoContext";

const AddTodoForm = () => {
  const {
    addTodo,
    toggleOpenModal,
  } = useContext(TodoContext);

  // se crea localmente por que en este contexto solo es necesario para el form
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    toggleOpenModal();
  };

  const onCancel = () => {
    toggleOpenModal();
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className={styles.AddTodoForm}>
      <h2>Escribe tu nuevo TODO</h2>
      <textarea placeholder="Ej. Hacer la compra..." value={newTodoValue} onChange={onChange}/>
      <div className={styles.ContainerButton}>
        <Button type="submit" title={"Agregar"}></Button>
        <Button setFunction={onCancel} title={"Cancelar"}></Button>
      </div>
    </form>
  );
};

export { AddTodoForm };
