import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

const TodoList = ({children}) => (
  <ul className={styles.TodoList}>
    {children}
  </ul>
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export {TodoList};
