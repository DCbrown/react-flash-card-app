import React, {useEffect, useState} from 'react';

const AdminQuestionsList = ({questions}) => {
    const [Qs, setQs] = useState({questions});

    const handleDelete = (id) => {
       
        fetch('http://localhost:8000/questions/' + id, {
            method: 'DELETE',
        }).then(() => {
            alert('Question Deleted');
        })
        window.location.reload(false);
    }    

    /*
    useEffect(() => { 
        setQs(questions)
        console.log(Qs);
    }, [Qs, questions]);
    */

    return (
        <div>
          {questions && questions.map((question) => (
              <div key={question.id}>
                <p><u>{question.question}</u></p>
                <p>{question.option1}</p>
                <p>{question.option2}</p>
                <p>{question.option3}</p>
                <p>{question.option4}</p>
                <h5>Correct Answer: {question.correctAnswer}</h5>
                <button onClick={() => handleDelete(question.id)}>Delete</button>
                <hr></hr>
              </div>
          ))}  
          {!questions && <p>"no questions"</p>}
        </div>
    )
}

export default AdminQuestionsList