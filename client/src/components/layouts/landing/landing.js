import React, {useState} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../searchBar';
import {TrendingBlock} from './trending';

function Landing (props) {
  const [query, setQuery] = useState (null);
  const handleSubmit = val => {
    setQuery (val);
  };
  const {isAuthenticated, user} = props.auth;
  return (
    <div className="landing mt-3">
      <div className="container mb-3">
        Welcome
        <span style={{fontWeight: 'bold'}}>
          {isAuthenticated ? ` ${user.username} ` : ' Guest '}
        </span>
        to Show Time
      </div>
      <div className="container mt-3 mb-3">
        <SearchBar onHandleSubmit={handleSubmit} />
      </div>
      <TrendingBlock query={query} />
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps) (Landing);
