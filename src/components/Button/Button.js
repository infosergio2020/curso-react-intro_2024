import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = () => (
  <button className={`${styles.Button} ${styles.addButton}`}>
    addTask
  </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export {Button};
