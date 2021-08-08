import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AdminQuestionsList = ({qs, onDelete}) => {

  

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
                  <CardActions>
                    <Button onClick={() => onDelete(q.id)} size="small">Delete</Button>
                  </CardActions>
                </div>
              </CardContent>
            </Card>
          ))}  
          
        </>
    )
}

export default AdminQuestionsList