import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizGame from './Quiz';
import Login from './Login';
import SignUp from './SignUp';
import { AuthProvider } from './backend/Auth';
import PrivateRoute from './backend/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={QuizGame} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
