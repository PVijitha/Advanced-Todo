import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";

function TaskManageModal({
  show,
  handleClose,
  isEditMode,
  inputs,
  handleEditItem,
  addItem,
  task,
  isTitleValid,
  selectedProgress,
  toggleDropdown,
  isOpen,
  options,
  handleOptionClick,
  handleTitleChange,
  title,
  description
}) {

  // function handleChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   let error = "";
  //   switch (name) {
  //     case "email":
  //       error = !value.match(patterns.emailPttern) ? "Invalid Email" : "";
  //       break;
  //     case "password":
  //       error = !value.match(patterns.passwordPattern)
  //         ? "Invalid Password"
  //         : value.trim() === ""
  //         ? "Password is required"
  //         : "";
  //       break;
  //     default:
  //       break;
  //   }
  //   setErrors((prevErrors) => {
  //     const updatedErrors = { ...prevErrors, [name]: error };
  //     setIsFormValid(validateForm({ ...inputs, [name]: value }, updatedErrors));
  //     return updatedErrors;
  //   });

  //   setInputs((prevInputs) => {
  //     const updatedInputs = { ...prevInputs, [name]: value };
  //     setIsFormValid(validateForm(updatedInputs, { ...errors, [name]: error }));
  //     return updatedInputs;
  //   });
  // }

  // function validateForm(updatedInputs, updatedErrors) {
  //   return (
  //     Object.values(updatedErrors).every((error) => error === "") &&
  //     Object.values(updatedInputs).every((value) => value !== "")
  //   );
  // }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2 className="head-text">{isEditMode ? "Edit Task" : "New Task"}</h2>
        </Modal.Header>
        <form>
        <input
          type="text"
          name="title"
          value={title}
          className="task-title"
          onChange={isEditMode ? null : handleTitleChange}
          placeholder="Title"
        />
        {/* {!isTitleValid && <p className="error ms-1">Title cannot be empty</p>} */}
        {/* {!isAlreadyExist && (
          <p className="error ms-1">This task already exist in todolist</p>
        )} */}
        <textarea
          name="textarea"
          value={description}
          placeholder="Add task description...."
          className="area"
        />
        <Modal.Footer>
          <button className="com-button btn-height" onClick={handleClose}>
            Close
          </button>
          <button
            className="com-button btn-height"
            onClick={
              isEditMode
                ? () => {
                    handleEditItem(task);
                  }
                : addItem
            }
            disabled={!isTitleValid}
          >
            {isEditMode ? "Update" : "Add"}
          </button>
          {isEditMode ? (
            <div className="dropdown">
              <div className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedProgress || "Todo"}
                <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
              </div>
              <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export { TaskManageModal };
