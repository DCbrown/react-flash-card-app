import { makeStyles } from '@material-ui/core/styles';
import FlashCard from './FlashCard';

const Test = ({qs}) => {

    const useStyles = makeStyles({
        root: {
          float: 'left',
          margin: '10px',
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
            <div key={q.id} className={classes.root}>
              <FlashCard className={classes.card} qs={q} /> 
            </div>
          ))}  
        </>
    )
}

export default Test
