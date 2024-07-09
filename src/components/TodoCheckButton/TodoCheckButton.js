import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import styles from './TodoCheckButton.module.css';

const TodoCheckButton = ({ checked, onCompleted }) => {
  return (
    <button className={ `${styles.TodoCheckButton} ${checked ? styles.checked : ''}`  } onClick={onCompleted} >
      {checked ? <AiOutlineCheck /> : <AiOutlineClose />}
    </button>
  );
};

export { TodoCheckButton };