import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const onClick = () => {
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className="CreateTodoButton"
      type="button"
      onClick={onClick}
    >
      +
    </button>
  );
};

export { CreateTodoButton };