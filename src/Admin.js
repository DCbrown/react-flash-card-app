import { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar';
import AdminForm from './AdminForm';
import AdminQuestionsList from './AdminQuestionsList';
import { makeStyles } from '@material-ui/core/styles';

export const Admin = () => {

      

  const useStyles = makeStyles({
    root: {
      minWidth: 375,
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