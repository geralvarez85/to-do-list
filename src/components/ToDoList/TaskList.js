import Task from './Task';
import './ToDoList.css';

function TaskList({ tasks, onRemove }) {
  const taskList = tasks.map((task) => <Task key={task.id} data={task} onRemove={onRemove} />);

  return (
    <div className="middle-box">
      <ul>
        <li className="task">{taskList}</li>
      </ul>
    </div>
  );
}

export default TaskList;
