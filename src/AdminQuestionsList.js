import React, {useEffect, useState} from 'react';

const AdminQuestionsList = ({qs, onDelete}) => {

    return (
        <>
          {qs.map((q) => (
              <div key={q.id}>
                <p><u>{q.q}</u></p>
                <p>{q.option1}</p>
                <p>{q.option2}</p>
                <p>{q.option3}</p>
                <p>{q.option4}</p>
                <h5>Correct Answer: {q.correctAnswer}</h5>
                <button onClick={() => onDelete(q.id)}>Delete</button>
                <hr></hr>
              </div>
          ))}  
        </>
    )
}

export default AdminQuestionsList