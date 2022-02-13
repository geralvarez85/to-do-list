import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './ToDoList.css';

function Task({ data, onRemove, onCheck }) {
  const iconDelete = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div className="row">
      <div className="col-2 text-end">
        <Form.Check type="checkbox" onClick={(evt) => onCheck(data, evt.target.checked)} />
      </div>
      <div className="col-8 text-start">{data.description}</div>
      <div className="col-2 text-start">
        <button onClick={() => onRemove(data.id)}>{iconDelete}</button>
      </div>
    </div>
  );
}

export default Task;
