import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import './ToDoList.css';

function ToDoList() {
    return (
        <>
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <Title data="To-do List" />
                  <div className="middle-box">
                    <ul>
                      <li className="task">
                        <div className="row">
                          <div className="col-2 text-end">
                            <span>O</span>
                          </div>
                          <div className="col-8 text-start">Lavar la ropa</div>
                          <div className="col-2 text-start">
                            <span>X</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className=""></div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
}

export default ToDoList;