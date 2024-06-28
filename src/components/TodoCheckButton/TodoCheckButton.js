import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import PropTypes from 'prop-types';
import styles from './TodoCheckButton.module.css';



const TodoCheckButton = () => {

  const [checked,setChecked] = useState(false);

  const toggleChecked = ()=>{ 
    setChecked(!checked); 
  };
  
  return (
    <button className={ `${styles.TodoCheckButton} ${checked ? styles.checked : ''}`  } onClick={toggleChecked}>
      {checked ? <AiOutlineCheck /> : <AiOutlineClose />}
    </button>
  );

};

TodoCheckButton.propTypes = {};

TodoCheckButton.defaultProps = {};

export { TodoCheckButton };
