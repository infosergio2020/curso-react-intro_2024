import React, {useContext} from "react";
//import PropTypes from "prop-types";
import styles from "./TodoSearch.module.css";
import { TodoContext } from "./../../TodoContext/TodoContext";

const TodoSearch = () => {
  const { searchValue,setSearchValue } = useContext(TodoContext);

  return (
    <>
      <input
        className={styles.TodoSearch}
        placeholder="todo something"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
};

//TodoSearch.propTypes = {};
//TodoSearch.defaultProps = {};

export { TodoSearch };
