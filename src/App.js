import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import _ from 'lodash';

import ToDoList from './components/ToDoList';
import NewToDoButton from './components/NewToDoButton';
import ToDoModal from './components/ToDoModal';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  function saveInLocalStorage(task) {
    localStorage.setItem(task.id, JSON.stringify(task));
  }

  function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
  }

  function addTask(description) {
    const newTask = { id: uuidv4(), description: description, status: 'todo' };
    const newList = _.clone(list);

    saveInLocalStorage(newTask);
    setList(newList.concat(newTask));
  }

  function removeTask(id) {
    removeFromLocalStorage(id);
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function checkTask() {
    // checkTask
  }

  function hideModal() {
    setModal(false);
  }

  function showModal() {
    setModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToDoList tasks={list} onRemove={removeTask} />
        <NewToDoButton onClick={showModal} />
        <ToDoModal show={modal} onHide={hideModal} onSave={addTask} />
      </header>
    </div>
  );
}

export default App;
