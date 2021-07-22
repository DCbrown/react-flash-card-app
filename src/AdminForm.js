import React, {useState} from 'react'

export const AdminForm = ({ onAdd }) => {
    const [q, setQ] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isPending, setIsPending ] = useState(false);
    
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
            <form onSubmit={handleSubmit}>
                <label>Question</label>
                <br/>
                <textarea 
                    required 
                    value={q} 
                    onChange={(e) => setQ(e.target.value)}></textarea>
                <br/>
                <label>Option 1</label>
                <br/>
                <input 
                    type="text"
                    value={option1}
                    onFocus={(e) => setOption1(e.target.value)}
                    onChange={(e) => setOption1(e.target.value)}
                    ></input>                
                <br/>
                <label>Option 2</label>
                <br/>
                <input 
                    type="text"
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}></input>
                <br/>
                <label>Option 3</label>
                <br/>
                <input 
                    type="text"
                    value={option3}
                    onChange={(e) => setOption3(e.target.value)}></input>
                <br/>
                <label>Option 4</label>
                <br/>
                <input 
                    type="text"
                    value={option4}
                    onChange={(e) => setOption4(e.target.value)}></input>
                <br/>
                <label>Correct Answer</label>
                <br/>
                <select id="correctAnswer" disabled={!option1} name="correctAnswer" onChange={(e) => setCorrectAnswer(e.target.value)}>
                   <option value="">---</option> 
                   <option value={option1}>{option1}</option> 
                   {!option2 || <option value={option2}>{option2}</option>}
                   {!option3 || <option value={option3}>{option3}</option>}
                   {!option4 || <option value={option4}>{option4}</option>}
                </select>
                <br/>
                {!isPending && <button disabled={!q || !option1 || !option2 || correctAnswer === ""}>Submit</button> }
                {isPending && <button disabled>Adding Questions... </button>}
            </form>
        </div>
    )
}

export default AdminForm