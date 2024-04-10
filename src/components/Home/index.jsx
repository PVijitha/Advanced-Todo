import React, { useState, useEffect} from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useTaskStore } from "../Store/taskStore";
import { TaskManageModal } from "./TaskManageModal";
import {useTodoStore} from '../Store/todoStore';
function Index() {
  const options = ["Todo", "In progress", "Completed", "Cancel"];
  const [show, setShow] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   setSelectedProgress("Todo");
  // }, []);

 const inputs = useTodoStore(React.useCallback(state => state.inputs, []));
 const selectedProgress = useTodoStore(React.useCallback(state => state.selectedProgress, []));
 const setSelectedProgress = useTodoStore(React.useCallback(state => state.setSelectedProgress, []));
//  const selectedTodo = useTodoStore(React.useCallback(state => state.selectedTodo, []));
//  const setSelectedTodo = useTodoStore(React.useCallback(state => state.setSelectedTodo, []));
 const setTitle = useTodoStore(React.useCallback(state => state.setTitle, []));
 const isTitleValid = useTodoStore(React.useCallback(state => state.isTitleValid, []));
 const setIsTitleValid = useTodoStore(React.useCallback(state => state.setIsTitleValid, []));
 const title = useTodoStore(React.useCallback(state => state.inputs.title, []));
 const description = useTodoStore(React.useCallback(state => state.inputs.description, []));

  function handleOptionClick(option) {
    setSelectedProgress(option);
    setIsOpen(false)
    };

  function addItem() {

  }

  function handleClose() {
    setShow(false);
  }

  function handleAddButton() {
    setShow(true);
    setIsEditMode(false);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    if (!isEditMode) {
      setIsTitleValid(true);
      // setisAlreadyExist(true);
    }
  }

  return (
    <div className="row m-0">
      <div className="col-3 p-0">
        <div className="home-img" />
      </div>
      <div className="col-9 p-0">
        <Header />
        <div className="p-5 d-flex">
          <Search />
          <button className="ms-3 com-button">Search</button>
          <button className="ms-3 com-button" onClick={handleAddButton}>
            Add
          </button>
          <button className="ms-3 com-button">
            Sort
            <FontAwesomeIcon icon={faArrowUp} className="ms-2" />
          </button>
          <button className="ms-3 com-button">
            Delete
            <FontAwesomeIcon icon={faTrash} className="ms-2" />
          </button>
        </div>
      </div>
      {show ? (
        <TaskManageModal
          show={show}
          handleClose={handleClose}
          isEditMode={isEditMode}
          inputs={inputs}
          addItem={addItem}
          selectedProgress={selectedProgress}
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          options={options}
          isTitleValid={isTitleValid}
          handleOptionClick={handleOptionClick}
          handleTitleChange={handleTitleChange}
          title={title}
          description={description}
        />
      ) : null}
    </div>
  );
}

export default Index;
