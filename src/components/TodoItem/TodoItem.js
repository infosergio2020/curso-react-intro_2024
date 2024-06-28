import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';
import { TodoCheckButton } from './../TodoCheckButton/TodoCheckButton';
import { TodoDeleteButton } from './../TodoDeleteButton/TodoDeleteButton';

const TodoItem = (props) => (
  <li className={styles.TodoItem}>
    <TodoCheckButton />
    <p className={`${styles.TodoItemP} ${props.completed && styles.TodoItemPComplete}`}>{props.text}</p>
    <TodoDeleteButton />
  </li>
);

TodoItem.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

TodoItem.defaultProps = {
  completed: false,
};

export {TodoItem};
