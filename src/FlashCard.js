import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const useStyles = makeStyles({
    card: {
        position: 'relative'
    },
    flip: {
      maxWidth: 900,
      minWidth: 900,
      minHeight: 120,
      margin:0
    },
    notFlip: {
        maxWidth: 900,
        minWidth: 900,
        alignItems: 'center'
    },
    answer: {
        marginTop: '5%',
        textAlign: 'center',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


const FlashCard = ({qs}) => {
    const [isflipCard, setIsFlipCard] = useState(false);

    const classes = useStyles();

    return (
        <>
         <Card className={classes.card} isFlipCard={isflipCard}onClick={() => setIsFlipCard(!isflipCard)}>
            { isflipCard ? 
            <CardContent className={classes.flip}> 
                <p className={classes.answer}><strong>Correct Answer: {qs.correctAnswer}</strong></p> 
            </CardContent> 
            : 
            <CardContent className={classes.notFlip}>
                <div>
                    <p><u>{qs.q}</u></p>  
                    <ul>
                        <li>{qs.option1}</li>
                        <li>{qs.option2}</li>
                        { qs.option3 === "" || <li>{qs.option3}</li> }
                        { qs.option4 === "" || <li>{qs.option4}</li> }
                    </ul>
                </div>
              </CardContent>}
            </Card>   
        </>
    )
}

export default FlashCard
