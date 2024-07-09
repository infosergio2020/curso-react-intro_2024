import React from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css';

// creamos una funcion legacy el cual usa implementa un portal para agregar el componente modal al html ojo hay que agregar un nuevo tag html con id para poder agregar componentes a renderizar
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.ModalBackground}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
