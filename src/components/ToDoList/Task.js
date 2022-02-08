import './ToDoList.css';

function Task({ data }) {
  return (
    <div className="row">
      <div className="col-2 text-end">
        <span>{data.status}</span>
      </div>
      <div className="col-8 text-start">{data.description}</div>
      <div className="col-2 text-start">
        <span>X</span>
      </div>
    </div>
  );
}

export default Task;
