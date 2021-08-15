import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const AdminQuestionsList = ({qs, onDelete}) => {

    return (
        <>
          {qs.map((q) => (
            <Card style={{ width: '20rem', margin: '0.5rem' }} key={q.id}>
            <Card.Body>
                <div>
                  <Card.Title>{q.q}</Card.Title>  
                  <ListGroup>
                    <ListGroup.Item>{q.option1}</ListGroup.Item>
                    <ListGroup.Item>{q.option2}</ListGroup.Item>
                    { q.option3 === "" || <ListGroup.Item>{q.option3}</ListGroup.Item> }
                    { q.option4 === "" || <ListGroup.Item>{q.option4}</ListGroup.Item> }
                  </ListGroup>
                  <br />         
                  <p><strong>Correct Answer: {q.correctAnswer}</strong></p>
                  <Button onClick={() => onDelete(q.id)} variant="danger">Delete Card</Button>         
                </div>
            </Card.Body>
            </Card>
          ))}   
        </>
    )
}

export default AdminQuestionsList