import { React, createContext,useState } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";

const TodoContext = createContext();

// version customizada para acceder de forma corta
function TodoProvider({children}) {
  // estados
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // funciones que modifican el estado
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    })
    saveTodos(newTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    console.log("deleteTodo is running...");
  };

  const toggleOpenModal = ()=>{
    setOpenModal(state => !state);
  }

  // Declaro todas las proviedades que quiero que sean visibles para los componentes child
  //establezco {children} entre providers para encapsular cualquier componente que quiera ser envuelto dentro de este provider
  return (<TodoContext.Provider value={{
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    toggleOpenModal,
    addTodo
  }}>
    {children}
  </TodoContext.Provider>);
}

export { TodoContext, TodoProvider };
