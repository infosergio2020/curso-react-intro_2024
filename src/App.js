import { React } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./TodoContext/TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "usar estados derivados", completed: true },
//   { text: "LALALALALA", completed: false },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
//localStorage.removeItem('TODO_V1');

function App() {
  return (
    // al pasar como child el componente todos los componentes dentro de AppUI tienen acceso a las propidades de TodoProvider
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
