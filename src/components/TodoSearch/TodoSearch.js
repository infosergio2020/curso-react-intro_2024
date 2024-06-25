import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoSearch.module.css';

const TodoSearch = () => (
  <>
    <input className={styles.TodoSearch} placeholder="todo something"/>
  </>
);

TodoSearch.propTypes = {};

TodoSearch.defaultProps = {};

export { TodoSearch };
