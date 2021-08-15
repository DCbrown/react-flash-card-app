import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const AdminForm = ({ onAdd }) => {
    const [q, setQ] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        onAdd({ q, option1, option2, option3, option4, correctAnswer})

        setQ('')    
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setCorrectAnswer('');
    }
    

    return (
        <div>
            <h1>Admin Section</h1>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Col xs={9}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" rows={5} value={q} onChange={(e) => setQ(e.target.value)} />
                </Form.Group>    
            </Col>
            <Col xs={9}>
            <Form.Group 
                className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Option 1</Form.Label>
                    <Form.Control 
                        value={option1}
                        onFocus={(e) => setOption1(e.target.value)}
                        onChange={(e) => setOption1(e.target.value)} 
                        type="text" />
                </Form.Group>
            </Col>
            <Col xs={9}>
                <Form.Group 
                    className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control 
                            value={option2}
                            onFocus={(e) => setOption2(e.target.value)}
                            onChange={(e) => setOption2(e.target.value)} 
                            type="text" />
                </Form.Group>
            </Col>   
            <Col xs={9}>
                <Form.Group 
                    className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Option 3</Form.Label>
                        <Form.Control 
                            value={option3}
                            onFocus={(e) => setOption3(e.target.value)}
                            onChange={(e) => setOption3(e.target.value)} 
                            type="text" />
                </Form.Group>
            </Col>    
            <Col xs={9}>
            <Form.Group 
                className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Option 4</Form.Label>
                    <Form.Control 
                        value={option4}
                        onFocus={(e) => setOption4(e.target.value)}
                        onChange={(e) => setOption4(e.target.value)} 
                        type="text" />
                </Form.Group>
            </Col>  
            <Col xs={9}>
                <Form.Label>Correct Answer</Form.Label>
                <Form.Select 
                disabled={!option1} 
                aria-label="Correct Answer"
                onChange={(e) => setCorrectAnswer(e.target.value)}>
                    <option value="">---</option>
                    <option value={option1}>{option1}</option>
                    {!option2 || <option value={option2}>{option2}</option>}
                    {!option3 || <option value={option3}>{option3}</option>}
                    {!option4 || <option value={option4}>{option4}</option>}
                </Form.Select>
            </Col>      
                <br />
                <Button type="submit" 
                        variant="primary"
                        disabled={!q || !option1 || !option2 || correctAnswer === ""}
                        >Primary</Button>
            </form>
        </div>
    )
}

export default AdminForm