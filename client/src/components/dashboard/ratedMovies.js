import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

function Dashboard (props) {
  const {isAuthenticated, user} = props.auth;
  if (!isAuthenticated) {
    props.history.push ('/login');
  }
  const [items, setItems] = useState ([]);
  const [isLoading, setIsLoading] = useState (false);
  useEffect (() => {
    setIsLoading (true);
    const fetchData = async () => {
      const result = await axios ('/api/movies');
      setItems (result.data.data.movies);
      setIsLoading (false);
    };
    fetchData ();
  }, []);
  let newArr = [];
  if (!isLoading) {
    items.forEach (item => {
      if (item.userId === user.id) {
        newArr.push (item);
      }
    });
  }
  const list = newArr.map (item => {
    return (
      <li
        key={item._id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {item.movie.original_title
          ? item.movie.original_title
          : item.movie.original_name}
        <span className="badge badge-primary badge-pill">{item.rating}</span>
      </li>
    );
  });
  return (
    <div className="container mt-3">
      <div className="container text-center text-danger">
        Here is the list of your Rated Movies
      </div>
      <div className="container mt-3">
        {isLoading
          ? <div>loading...</div>
          : newArr.length === 0
              ? 'please rate some movies'
              : <ul className="list-group">{list}</ul>}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps) (Dashboard);
