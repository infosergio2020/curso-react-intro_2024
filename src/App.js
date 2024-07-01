import { React } from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
// botones
import { TodoDeleteButton } from "./components/TodoDeleteButton/TodoDeleteButton";
import { TodoCheckButton } from "./components/TodoCheckButton/TodoCheckButton";
import { Button } from "./components/Button/Button";
import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";

import './App.css';


const defaultTodos=[{text:'Cortar cebolla',completed:true},{text:'Tomar el Curso de Intro a React.js',completed:false},{text:'Llorar con la Llorona',completed:false},{text:'LALALALALA',completed:false},];



function App() {
  return (
    <div className="container">
      <div className="child">
        <TodoCounter completed={(defaultTodos.filter((todo)=> todo.completed).length )} total={defaultTodos.length}/>
        <TodoSearch/>
        <TodoList>
          {defaultTodos.map((todo,index)=>(<TodoItem key={index} text={todo.text} completed={todo.completed}/>))}
        </TodoList>
      </div>

      <div className="child">
        <AddTodoForm />
      </div>

      
    </div>
  );
}

export default App;