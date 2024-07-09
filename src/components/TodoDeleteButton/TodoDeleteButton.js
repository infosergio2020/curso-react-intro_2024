import { AiOutlineClose } from 'react-icons/ai'; // Importa el icono de cerrar de react-icons/ai
import styles from './TodoDeleteButton.module.css';

const TodoDeleteButton = ({ onDeleted }) => { 
  return (
  <button className={styles.TodoDeleteButton} onClick={onDeleted}>
    <AiOutlineClose />
  </button>
)};

export {TodoDeleteButton};