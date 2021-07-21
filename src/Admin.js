import React from 'react'
import AdminNavbar from './AdminNavbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminForm from './AdminForm';
import AdminQuestionsList from './AdminQuestionsList';
import useFetch from './useFetch';

export const Admin = () => {
    const { data: questions, isFetchPending, error } = useFetch('http://localhost:8000/questions');

    return (
        <Router>
            <div>
                <AdminNavbar />
                <Switch>
                    <Route exact path="/">
                        <AdminForm />
                    </Route>
                    <Route exact path="/questions">
                      {questions && <AdminQuestionsList questions={questions} />}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Admin;