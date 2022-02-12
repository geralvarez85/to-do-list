import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './ToDoModal.css';

function ToDoModal({ show, onHide, onSave }) {
  const [text, setText] = useState('');

  function handleChange(evt) {
    setText(evt.target.value);
  }

  function handleSave() {
    onSave(text);
    onHide();
    setText('');
  }

  return (
    <Modal show={show} onHide={onHide} centered animation={false}>
      <div className="m-2">
        <Form.Control type="text" placeholder="Ingrese la tarea" autoFocus value={text} onChange={handleChange} />
      </div>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ToDoModal;
