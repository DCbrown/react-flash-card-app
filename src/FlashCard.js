import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    
    flip: {
      margin:0
    },
    notFlip: {
        alignItems: 'center'
    },
    answer: {
        marginTop: '5%',
        textAlign: 'center',
    },
});


const FlashCard = ({qs}) => {
    const [isflipCard, setIsFlipCard] = useState(false);

    const classes = useStyles();

    return (
        <>
         <Card style={{ width: '20rem', margin: '0.5rem' }} isFlipCard={isflipCard}onClick={() => setIsFlipCard(!isflipCard)}>
            { isflipCard ? 
            <Card.Body className={classes.flip}> 
                <p className={classes.answer}><strong>Correct Answer</strong><br/> {qs.correctAnswer}</p> 
            </Card.Body> 
            : 
            <Card.Body className={classes.notFlip}>
                <div>
                <Card.Title>{qs.q}</Card.Title>  
                <ListGroup>
                  <ListGroup.Item>{qs.option1}</ListGroup.Item>
                  <ListGroup.Item>{qs.option2}</ListGroup.Item>
                  { qs.option3 === "" || <ListGroup.Item>{qs.option3}</ListGroup.Item> }
                  { qs.option4 === "" || <ListGroup.Item>{qs.option4}</ListGroup.Item> }
                </ListGroup>                  
                </div>
            </Card.Body>}
          </Card>   
        </>
    )
}

export default FlashCard
