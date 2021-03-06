import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles.scss';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Header from './components/layouts/header';
import Landing from './components/layouts/landing/landing';
import MovieDetails from './components/movieDetails/movieDetails';
import Dashboard from './components/dashboard/ratedMovies';

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
        </Switch>
        <Switch>
          <Route exact path="/details" component={MovieDetails} />
        </Switch>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
