import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoCounter.module.css';

const TodoCounter = ({total, completed}) => (
  <div className={styles.TodoCounter}>
    <h1>Has completado<span>{completed}</span> de <span>{total}</span>TODOs</h1>
  </div>
);

TodoCounter.propTypes = {
  completed: PropTypes.bool,
  total: PropTypes.number.isRequired,
};

TodoCounter.defaultProps = {
  completed: false,
  total: 0
};

export {TodoCounter};
