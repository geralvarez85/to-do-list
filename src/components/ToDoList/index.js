import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import TaskList from './TaskList';
import './ToDoList.css';

function ToDoList({ tasks, onRemove, onCheck }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <Title title="To-do List" />
              <TaskList tasks={tasks} onRemove={onRemove} onCheck={onCheck} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoList;
