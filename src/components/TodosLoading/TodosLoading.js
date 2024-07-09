import React from "react";
import { PiSpinnerBallFill } from 'react-icons/pi';
import styles from './TodosLoading.css';

function TodosLoading(){
    
    return (
        <div className={styles.spinnerContainer}>
          <PiSpinnerBallFill className={styles.spinnerIcon} />
        </div>
      );

}

export { TodosLoading };