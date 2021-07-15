import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  return ReactDOM.createPortal(
    <div className={isOpen ? "" : classes.hidden}>
      <div onClick={onClose} className={classes.overlay} />
      <div className={classes.modalContentWrapper}>
        <button onClick={onClose}>Close</button>
        <div> {children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export default Modal;
