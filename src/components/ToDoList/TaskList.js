import Task from './Task';
import './ToDoList.css';

function TaskList({ tasks }) {
  const taskList = tasks.map((task) => <Task key={task.id} data={task} />);
  return (
    <div className="middle-box">
      <ul>
        <li className="task">{taskList}</li>
      </ul>
    </div>
  );
}

export default TaskList;
