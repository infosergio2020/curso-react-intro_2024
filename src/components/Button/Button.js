import React from 'react';
import { FaPlus } from "react-icons/fa6";
import styles from './Button.module.css';

const Button = ({setFunction,title,callModal}) => {

  return !callModal ? (<button className={`${styles.Button}`}
  onClick={setFunction}> {title}
  </button>) : (
    <button className={`${styles.Button} ${styles.ButtonCallModal}`}
    onClick={setFunction}> <FaPlus />
    </button>
  );
  
};

export {Button};