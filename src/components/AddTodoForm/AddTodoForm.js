import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodoForm.module.css';
import {Button} from './../Button/Button'; // Asegúrate de importar correctamente el componente Button

const AddTodoForm = () => (
  <div className={styles.AddTodoForm}>
    <h2>Agregar Tarea</h2>
    <input type="text" placeholder="Ej. Hacer la compra..." />
    <Button>Agregar</Button>
  </div>
);

AddTodoForm.propTypes = {};

AddTodoForm.defaultProps = {};

export {AddTodoForm};
