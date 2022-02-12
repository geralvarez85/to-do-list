import { Container, Row, Col } from 'react-bootstrap';
import './NewToDoButton.css';

function NewToDoButton({ onClick }) {
  return (
    <Container>
      <Row>
        <Col>
          <button type="button" onClick={onClick}>
            New Task
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default NewToDoButton;
