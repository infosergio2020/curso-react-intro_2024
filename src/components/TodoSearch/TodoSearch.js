import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TodoSearch.module.css";

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  console.log(`valor a buscar es: ${searchValue}`);

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

TodoSearch.propTypes = {};

TodoSearch.defaultProps = {};

export { TodoSearch };
