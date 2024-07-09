import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';
import { TodoCheckButton } from './../TodoCheckButton/TodoCheckButton';
import { TodoDeleteButton } from './../TodoDeleteButton/TodoDeleteButton';

const TodoItem = ({completed, text, onCompleted, onDeleted}) => {
  return (
  <li className={styles.TodoItem} >
    <TodoCheckButton checked={completed} onCompleted={onCompleted}/>
    <p className={`${styles.TodoItemP} ${completed && styles.TodoItemPComplete}`}>{text}</p>
    <TodoDeleteButton onDeleted={onDeleted}/>
  </li>
)};

TodoItem.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

TodoItem.defaultProps = {
  completed: false,
};

export {TodoItem};
