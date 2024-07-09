import React, {useContext} from 'react';
import { TodoContext } from "./../../TodoContext/TodoContext";
import styles from './TodoCounter.module.css';

const TodoCounter = () => {
  const { completedTodos,totalTodos } = useContext(TodoContext);
  return (
  <div className={styles.TodoCounter}>

  {
  (totalTodos === completedTodos) ?
   <h1>Has completado todas las tareas, felicidades 🥳</h1>
   :
   <h1>Has completado<span>{completedTodos}</span> de <span>{totalTodos}</span>TODOs</h1>
   }

  </div>
)};

export {TodoCounter};