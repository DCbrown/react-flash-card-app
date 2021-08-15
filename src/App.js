import Admin from './Admin';
import Test from './Test'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
      <div>
        <Switch>
          <Route exact path="/">
            <Container>
              <Row>
                <Test qs={qs} />
              </Row>
            </Container>   
          </Route>
          <Route path="/admin">
            <Container>
              <Admin qs={qs} />
            </Container>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
