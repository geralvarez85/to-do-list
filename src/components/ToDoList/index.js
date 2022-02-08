import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import TaskList from './TaskList';
import './ToDoList.css';

function ToDoList() {
  const fakeTasks = [
    { id: 1, description: 'lavar la ropa', status: 'todo' },
    { id: 2, description: 'pasear al perro', status: 'todo' },
    { id: 3, description: 'hacer la tarea', status: 'todo' },
    { id: 4, description: 'bañarme', status: 'todo' },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <Title title="To-do List" />
              <TaskList tasks={fakeTasks} />
              <div className=""></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoList;
