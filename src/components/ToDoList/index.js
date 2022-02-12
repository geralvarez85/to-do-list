import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import TaskList from './TaskList';
import './ToDoList.css';

function ToDoList({ tasks }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <Title title="To-do List" />
              <TaskList tasks={tasks} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoList;
