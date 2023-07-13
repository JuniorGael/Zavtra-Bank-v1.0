import React from "react";
import "../styles/components/Modal.css";

const Modal = ({
  user,
  isOpen,
  setIsOpen,
  onDelete = () => {},
}) => {
  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete(user.id);
    setIsOpen(false)
  };

  const handleClose = (e) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <div className="modalContainer" onMouseDown={handleClose}>
      <div className={isOpen ? "modal active" : "modal"}>
        <div className="modalHeader">
          <h3>
          Are you sure to delete this ?
        </h3>
        </div>
        <div className="modalBody">
          <p>ID: <span>{user.id}</span></p>
          <p>username: <span>{user.username}</span></p>
        </div>
        <div className="modalFooter">
          <button className="modalBtn confirm" onMouseDown={handleDelete}>Confirm</button>
          <button className="modalBtn cancel" onMouseDown={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
