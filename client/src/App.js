import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.scss";
import Header from "./components/layouts/header";
import Landing from "./components/layouts/landing/landing";
import MovieDetails from "./components/movieDetails/movieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Switch>
          <Route exact path="/details" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
