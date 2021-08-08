import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    

    const useStyles = makeStyles((theme) => ({
        title: {
            textAlign: 'center'
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: "99%"
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        questionTextArea: {
          margin: theme.spacing(1),  
          minWidth: "99%" 
        },
        answerInput: {
          margin: theme.spacing(1),  
          minWidth: "99%"
        },
        submitBtn: {
          margin: theme.spacing(1),  
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.title}>Admin Section</h1>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                    className={classes.questionTextArea}
                    id="outlined-multiline-static"
                    label="Question"
                    required 
                    multiline
                    rows={4}
                    variant="outlined"
                    value={q} 
                    onChange={(e) => setQ(e.target.value)}
                    /><br />
                <TextField
                    className={classes.answerInput} 
                    id="outlined-basic" 
                    label="Option 1" 
                    variant="outlined"
                    type="text"
                    value={option1}
                    onFocus={(e) => setOption1(e.target.value)}
                    onChange={(e) => setOption1(e.target.value)}
                     />
                 <TextField
                    className={classes.answerInput}  
                    id="outlined-basic" 
                    label="Option 2" 
                    variant="outlined"
                    type="text"
                    value={option2}
                    onFocus={(e) => setOption2(e.target.value)}
                    onChange={(e) => setOption2(e.target.value)}
                     />
                    <br /> 
                 <TextField 
                    className={classes.answerInput} 
                    id="outlined-basic" 
                    label="Option 3" 
                    variant="outlined"
                    type="text"
                    value={option3}
                    onFocus={(e) => setOption3(e.target.value)}
                    onChange={(e) => setOption3(e.target.value)}
                     />
                 <TextField 
                    className={classes.answerInput} 
                    id="outlined-basic" 
                    label="Option 4" 
                    variant="outlined"
                    type="text"
                    value={option4}
                    onFocus={(e) => setOption4(e.target.value)}
                    onChange={(e) => setOption4(e.target.value)}
                    />
                <br/>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">Correct Answer</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    disabled={!option1}
                    name="correctAnswer" 
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    >
                        <MenuItem value=""><em>---</em></MenuItem>
                        <MenuItem value={option1}>{option1}</MenuItem>
                        {!option2 || <MenuItem value={option2}>{option2}</MenuItem> }
                        {!option3 || <MenuItem value={option3}>{option3}</MenuItem> }
                        {!option4 || <MenuItem value={option3}>{option4}</MenuItem> }
                    </Select>
                </FormControl>
                
                <Button
                    className={classes.submitBtn} 
                    type="submit" 
                    disabled={!q || !option1 || !option2 || correctAnswer === ""} 
                    variant="contained"
                    >Submit</Button>
            </form>
        </div>
    )
}

export default AdminForm