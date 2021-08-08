import './App.css';
import Admin from './Admin';
import Test from './Test'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
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

    console.log(qs)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Test qs={qs} />
          </Route>
          <Route path="/admin">
            <Admin qs={qs} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
