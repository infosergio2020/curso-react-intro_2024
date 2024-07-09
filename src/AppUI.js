import React, { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { TodosError } from "./components/TodosError/TodosError";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { Modal } from "./components/Modal/Modal";
import { TodoContext } from "./TodoContext/TodoContext";
import "./App.css";
import { Button } from "./components/Button/Button";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    toggleOpenModal,
  } = useContext(TodoContext);
  return (
    <div className="container">
      <div className="child">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length == 0 && <EmptyTodos />}

          {searchedTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => {
                completeTodo(todo.text);
              }}
              onDeleted={() => {
                deleteTodo(todo.text);
              }}
            />
          ))}
        </TodoList>
      </div>

      

      {/* <div className="child">
        <AddTodoForm />
      </div> */}

      <Button callModal={true} setFunction={() => {toggleOpenModal(); }} title={"+"} />

      {openModal && <Modal> <AddTodoForm /> </Modal>}
    </div>
  );
}

export { AppUI };
