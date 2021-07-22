import { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminForm from './AdminForm';
import AdminQuestionsList from './AdminQuestionsList';
import useFetch from './useFetch';

export const Admin = () => {
    // const { data: questions, isFetchPending, error } = useFetch('http://localhost:8000/questions');

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
    }

    // Delete qs
    const deleteTask = async (id) => {
        await fetch(`http://localhost:8000/${id}`, {
            method: 'DELETE'
        })

        setQs(qs.filter((q) => q.id !== id))
    }

    console.log(qs)

    return (
        <div>
            <AdminNavbar />
                <AdminForm onAdd={addQ} />
                <AdminQuestionsList qs={qs} onDelete={deleteTask}/>
        </div>
    )
}

export default Admin;