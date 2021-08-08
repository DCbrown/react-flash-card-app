import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const Test = ({qs}) => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 500,
          float: 'left',
          margin: '20px'
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
    
    const classes = useStyles();

    return (
        <>
     
          {qs.map((q) => (
            <Card className={classes.root}>
              <CardContent>
                <div key={q.id}>
                  <p><u>{q.q}</u></p>
                  <ul>
                    <li>{q.option1}</li>
                    <li>{q.option2}</li>
                    <li>{q.option3}</li>
                    <li>{q.option4}</li>
                  </ul>
                 
                  <p><strong>Correct Answer: {q.correctAnswer}</strong></p>
                </div>
              </CardContent>
            </Card>
          ))}  
        </>
    )
}

export default Test
