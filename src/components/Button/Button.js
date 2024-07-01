import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = () => (
  <button className={`${styles.Button} ${styles.addButton}`}
  onClick={(event)=>{
    console.log("haz hecho click en crear evento");
    console.log(event);
    console.log(event.target);
    }}>
    addTask
  </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export {Button};
