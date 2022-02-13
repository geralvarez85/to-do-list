import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import TaskList from './TaskList';
import './ToDoList.css';

function ToDoList({ tasks, onRemove }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <Title title="To-do List" />
              <TaskList tasks={tasks} onRemove={onRemove} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoList;
