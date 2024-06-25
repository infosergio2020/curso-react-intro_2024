import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => (
  <li className={styles.TodoItem}>
    <span className={`${styles.Icon} ${props.completed && styles.IconCheckActive}`}>V</span>
    <p className={`${styles.TodoItemP} ${props.completed && styles.TodoItemPComplete}`}>{props.text}</p>
    <span className={`${styles.Icon} ${styles.IconDelete}`}>X</span>
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
