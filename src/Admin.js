import { useState, useEffect } from 'react'
import AdminForm from './AdminForm';
import AdminQuestionsList from './AdminQuestionsList';
import Row from 'react-bootstrap/Row';

export const Admin = () => {

    const [qs, setQs] = useState([]);

    useEffect(() => {
        const getQs = async () => {
            const qsFromServer = await fetchQs();
            setQs(qsFromServer)
        }

        getQs()
    }, [])

    // Fetch Qs
    const fetchQs = async () => {
        const res = await fetch('http://localhost:8000/questions')
        const data = await res.json();
        return data;
    }

    // Fetch Q
    // Fetch One Question
    const fetchQ = async (id) => {
        const res = await fetch(`http://localhost:8000/questions/${id}`)
        const data = await res.json();
        return data;
    }

    //Add Q
    const addQ = async (q) => {
        const res = await fetch('http://localhost:8000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(q)
        })

        const data = await res.json();

        setQs([...qs, data])

        alert('Question Submitted!')
    }

    // Delete qs
    const deleteTask = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`http://localhost:8000/questions/${id}`, {
                method: 'DELETE'
            })
            setQs(qs.filter((q) => q.id !== id))
        }

       
    }
    return (
        <div>
            <AdminForm onAdd={addQ} />
            <Row>
                <AdminQuestionsList qs={qs} onDelete={deleteTask}/>    
            </Row>
        </div>
    )
}

export default Admin;