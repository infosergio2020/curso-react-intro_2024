import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai'; // Importa el icono de cerrar de react-icons/ai
import styles from './TodoDeleteButton.module.css';

const TodoDeleteButton = () => (
  <button className={styles.TodoDeleteButton}>
    <AiOutlineClose />
  </button>
);

TodoDeleteButton.propTypes = {};

TodoDeleteButton.defaultProps = {};

export {TodoDeleteButton};
